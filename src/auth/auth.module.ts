import {forwardRef, Module} from '@nestjs/common';
import {AuthService} from './service/auth.service';
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtAuthGuard} from "./guards/jwt-guard";
import {RolesGuard} from "./guards/roles.guard";
import {JwtStrategy} from "./guards/jwt-strategy";
import {UserModule} from "../user/user.module";


@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '10000s'}
      })
    })
  ],
  providers: [AuthService, RolesGuard, JwtAuthGuard, JwtStrategy ],
  exports: [AuthService]
})
export class AuthModule { }

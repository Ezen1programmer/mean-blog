import { User } from '../../user/model/user.interface';


export interface BlogEntry {
  id?: number;
  title?: string;
  slug?: string;
  description?: string
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
  likes?: number;
  author?: User;
  publishedDate?: Date;
  isPublished?: boolean;
}
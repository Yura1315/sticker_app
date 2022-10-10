import Hapi from '@hapi/hapi';
import { IUserCreate, IUserFind } from '../models/database/repository/interfaces';

type Decorate<T> = T & Hapi.Request;

export type CreateUserRequest = Decorate<{ payload: IUserCreate; }>;
export type FindUserRequest = Decorate<{ query: IUserFind; }>;

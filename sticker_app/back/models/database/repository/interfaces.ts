export interface IUserCreate {
  firstName: string;
  lastName: string;
}

export interface IUserFind {
  limit: number;
  offset: number;
  firstName?: string;
}
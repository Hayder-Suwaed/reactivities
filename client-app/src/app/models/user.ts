export interface IUser {
  username: string;
  display: string;
  towkn: string;
  image?: string;
}

export interface IUserFormValues {
  email: string;
  password: string;
  displayName?: string;
  username?: string;
}

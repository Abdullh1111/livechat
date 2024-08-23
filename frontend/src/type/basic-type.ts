export type TUser = {
  _id:string;
  name?: string;
  email: string;
  password: string;
  profileImg?: File;
};

export type TMassege = {
  _id: string;
  message: string;
  from: string
  to: string;
  createdAt?: Date;
  updatedAt?: Date
}

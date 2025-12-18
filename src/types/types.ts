export interface IUser {
  id: string,
  email: string,
  name: string,
  bio: string
}
export type RegisterData = Pick<IUser , 'email' |'name'| 'bio'>
export interface AuthState  {
  userId: string | null,
  isAuth: boolean
}

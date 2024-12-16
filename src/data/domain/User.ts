import { Entity } from "./Entity"

export class User implements Entity {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public username: string,
    public email: string,
    public password: string,
  ) {}

}

export class LoginRequest {
  constructor(
      public email: string,
      public password: string,
  ){}
}

export class LoggedIn{
  constructor(
      public id: number,
      /* */
  ){}
}
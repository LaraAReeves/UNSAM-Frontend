import { Entity } from "./Entity"

export class Teacher implements Entity {
  constructor(
    public id: number,
    public name: string
  ){}
}
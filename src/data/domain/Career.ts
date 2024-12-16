import { Entity } from "./Entity"

export class Career implements Entity {
  constructor(
    public id: number,
    public name: string
  ){}
}
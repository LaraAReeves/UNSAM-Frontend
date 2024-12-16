import { Entity } from "./Entity"

export class Building implements Entity {
  constructor(
    public id: number,
    public name: string,
    public faculty: string, //En un futuro se podria cambiar por un objeto de tipo Faculty.
  ){}
}
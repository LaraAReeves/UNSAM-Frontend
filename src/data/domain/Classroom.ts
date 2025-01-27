import { Building } from './Building'
import { Entity } from './Entity'
import { Subject } from './Subject'

export class Classroom implements Entity {
  constructor(
    public id: number,
    public name: string,
    public building: Building,
    public capacity: number,
    public type: ClassroomType,
    public subject: Subject
  ) {}
}

type ClassroomType = 'Regular' | 'Laboratorio' | 'Taller'
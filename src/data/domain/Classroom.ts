import { Building } from "./Building"
import { Subject } from "./Subject"

export class Classroom {
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

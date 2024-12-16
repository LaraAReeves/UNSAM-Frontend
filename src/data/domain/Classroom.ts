export class Classroom {
  constructor(
    public id: number,
    public name: string,
    public capacity: number,
    public type: ClassroomType
  ) {}
}

export enum ClassroomType {
  LECTURE = 'LECTURE',
  LAB = 'LAB',
  WORKSHOP = 'WORKSHOP',
}
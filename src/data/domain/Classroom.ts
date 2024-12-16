export class Classroom {
  constructor(
    public id: number,
    public name: string,
    public capacity: number,
    public type: ClassroomType
  ) {}
}

type ClassroomType = 'Regular' | 'Laboratorio' | 'Taller'
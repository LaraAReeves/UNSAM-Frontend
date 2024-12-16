import { Career } from './Career'
import { Teacher } from './Teacher'

export class Subject {
  constructor(
    public id: number,
    public name: string,
    public careers: Career[],
    public teachers: Teacher[],
    public commission: string
  ) {}

  formatCareerNames(): string {
    const careerNames = this.careers.map(career => career.name)
    return careerNames.join(', ')
  }

  formatTeacherNames(): string {
    const teacherNames = this.teachers.map(teacher => teacher.name)
    return teacherNames.join(', ')
  }

  subjectAndCommission(): string {
    return `${this.name} - ${this.commission}`
  }
}
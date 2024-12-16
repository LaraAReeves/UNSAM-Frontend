import { Career } from "./Career"
import { Professor } from "./Professor"

export class Subject {
  constructor(
    public id: number,
    public name: string,
    public careers: Career[],
    public proffesors: Professor[],
    public commission: string
  ) {}

  getCareerNames(): string[] {
    return this.careers.map(career => career.name)
  }

  getProfessorNames(): string[] {
    return this.proffesors.map(professor => professor.name)
  }

  subjectAndCommission(): string {
    return `${this.name} - ${this.commission}`
  }
}
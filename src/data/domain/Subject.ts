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

  formatCareerNames(): string {
    const careerNames = this.careers.map(career => career.name)
    return careerNames.join(', ')
  }

  formatProfessorNames(): string {
    const professorNames = this.proffesors.map(professor => professor.name)
    return professorNames.join(', ')
  }

  subjectAndCommission(): string {
    return `${this.name} - ${this.commission}`
  }
}
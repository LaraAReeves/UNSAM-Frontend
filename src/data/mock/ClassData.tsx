export const casoClass: IClass = {
  id:0,
  name: "Conceptos de Arquitectura y Sistemas Operativos",
  classroomType : "Aula",
  commission: "C-TI09",
  classroom: "A28",
  classRoomId: 8,
  building: "Tornavías",
  buildingLevel: 'Subsuelo',
  teacher: ["Cosme Fulanito","Mr. X"],
  careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes","Ing. Electrónica"],
  schedules: "08:00 - 10:00",
  weekDays: ["Martes","Jueves"],
  startDate: "2024-12-01",
  endDate: "2025-03-01",
  viewType: 'standard'
}

export const algo3Class: IClass = {
  id:1,
  name: "Algoritmos 3",
  classroomType : "Lab. de Computación",
  commission: "C-TI10",
  classroom: "A28",
  classRoomId: 8,
  building: "Tornavías",
  buildingLevel: 'Subsuelo',
  teacher: ["Cosme Fulanito","Mr. X"],
  careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes","Ciencia de Datos","Tecnicatura en Programación Informática",],
  schedules: "08:00 - 10:00",
  weekDays: ["Lunes","Miércoles","Viernes"],
  startDate: "2024-12-01",
  endDate: "2025-03-01",
  viewType: 'standard'
}

export const algo2Class: IClass = {
  id:2,
  name: "Algoritmos 2",
  classroomType : "Lab. de Computación",
  commission: "C-TI13",
  classroom: "A28",
  classRoomId: 8,
  building: "Tornavías",
  buildingLevel: 'Subsuelo',
  teacher: ["F. Dodino"],
  careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes","Ciencia de Datos","Tecnicatura en Programación Informática",],
  schedules: "08:00 - 10:00",
  weekDays: ["Lunes","Miércoles","Viernes"],
  startDate: "2024-12-01",
  endDate: "2025-03-01",
  viewType: 'standard'
}

export const eymClass: IClass = {
  id:3,
  name: "Electricidad y Magnetismo",
  classroomType : "Lab. de Física",
  commission: "C-TI11",
  classroom: "A29",
  classRoomId: 8,
  building: "Tornavías",
  buildingLevel: 'Subsuelo',
  teacher: ["Lamagna"],
  careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes"],
  schedules: "08:00 - 10:00",
  weekDays: ["Martes","Jueves","Viernes"],
  startDate: "2024-12-01",
  endDate: "2025-03-01",
  viewType: 'standard'
}

export interface IClass{
  id: number
  name: string
  classroomType : string
  commission: string
  classroom: string
  classRoomId: number
  building: string
  buildingLevel: string
  teacher: string[]
  careers: string[]
  schedules: string
  weekDays: string[]
  startDate: string
  endDate: string
  viewType: string//'standard' | 'modal'
}

export const classes = [casoClass, algo3Class, algo2Class,eymClass]
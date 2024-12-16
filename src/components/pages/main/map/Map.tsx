import ClassRoomCard from "@/components/common/ClassRoomCard";


export default function Map() {

  // Datos de ejemplo para pasar a ClassRoomCard
  const classData = {
    className: "Conceptos de Arquitectura y Sistemas Operativos",
    // classroomType : "Aula",
    commission: "C-TI09",
    classroom: "A9",
    building: "Tornavias",
    teacher: ["Cosme Fulanito","Mr. X"],
    careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes","Diagnóstico por Imágenes"],
    schedules: "08:00 - 10:00",
    viewType: "standard"
  }

  const classData2 = {
    className: "Algoritmos 3",
    // classroomType : "Aula",
    commission: "C-TI10",
    classroom: "A9",
    building: "Tornavias",
    teacher: ["Cosme Fulanito","Mr. X"],
    careers: ["Tecnicatura en Programación Informática", "Tecnicatura en Redes","Ciencia de Datos"],
    schedules: "08:00 - 10:00",
    viewType: "modal"
  }

  return (
    <>
      <h1>Map</h1>
      <h2>Card Page</h2>
      {/* Card para la pag */}
      <ClassRoomCard 
        className={classData.className}
        // classroomType={classData.classroomType}
        commission={classData.commission}
        classroom={classData.classroom}
        building={classData.building}
        teacher={classData.teacher}
        careers={classData.careers}
        schedules={classData.schedules}
        viewType={classData.viewType}
      />
      <h2>Card Modal</h2>
      {/* Card para el modal */}
      <ClassRoomCard 
        className={classData2.className}
        // classroomType={classData2.classroomType}
        commission={classData2.commission}
        classroom={classData2.classroom}
        building={classData2.building}
        teacher={classData2.teacher}
        careers={classData2.careers}
        schedules={classData2.schedules}
        viewType={classData2.viewType}
      />
    </>
  )
}


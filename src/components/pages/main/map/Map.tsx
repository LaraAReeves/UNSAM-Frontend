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
    schedules: "08:00 - 10:00"
  }

  return (
    <>
      <h1>Map</h1>
      <ClassRoomCard 
        className={classData.className}
        // classroomType={classData.classroomType}
        commission={classData.commission}
        classroom={classData.classroom}
        building={classData.building}
        teacher={classData.teacher}
        careers={classData.careers}
        schedules={classData.schedules}
      />
    </>
  )
}


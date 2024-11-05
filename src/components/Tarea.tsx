
type PropsTarea = {
    tarea:string
    borrarTarea: () => void
}

export const Tarea = ({tarea,borrarTarea}: PropsTarea) => {
  return (
    <>
       <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar</button>
       </div>
    </>
  )
}
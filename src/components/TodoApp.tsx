import { useState } from "react"
import { ListaTareas } from "./ListaTareas";


export const TodoApp = () => {

  const [newTask,setNewTask] = useState<string>('');
  const [listaTareas,setListaTareas] = useState<string[]>([]);


  const handleAddTask = ()=>{
    if(newTask.trim() === '') return 
    setListaTareas(tareasAnteriores =>[...tareasAnteriores,newTask]);
    setNewTask('');
  }

  const handleBorrarTarea = (index: number) =>{
      setListaTareas(tareasActuales => tareasActuales.filter((_,i) => i !== index));
  };
  return (
    <>
        <div>
            <h1>Lista de Tareas</h1>
            <input 
               type="text" 
               value={newTask}
               onChange={(e) => setNewTask(e.target.value)}
               placeholder="Nueva Tarea"   
            
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </>
  )
}
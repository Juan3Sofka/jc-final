import { useState } from "react";
export function ToDos(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [finishDate, setFinishDate] = useState('');
    const [isCompleted, setIsCompleted] = useState('');
    const [userId, setUserId] = useState('');
    const [response, setResponse] = useState(null);


    const handleCreateToDo = (todo) => {
        //Revisar porque esta función no está siendo leida
        const task = {
            name: todo.name,
            description: todo.description,
            finishDate: todo.finishDate,
            isCompleted: todo.isCompleted,
            userId: todo.userId,
        };
        fetch('https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then((response) => response.json())
            .then((data) => setResponse(data));
    };
    // Función para imprimir las tareas del formulario en la consola
    const logFormTask = (data) => {
        console.log("Tareas del input: ", data);
    };
    // this.handleCreateToDo;

    const TaskData = () => {
        event.preventDefault();
        let todo = {
            name,
            description,
            finishDate,
            isCompleted,
            //traer el userID de la api, capturar el evento
        }
        // handleCreateToDo(todo)
        console.log(todo)
    }

    return (
        <div>
            <form onSubmit={TaskData}>
                <input type="text" placeholder="Ingresa el Título de la tarea: " name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Ingresa la descripción de la tarea: " name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="date" placeholder="Ingresa la fecha para finalizar " name="finishDate" value={finishDate} onChange={(e) => setFinishDate(e.target.value)} />
                <input type="checkbox" name="isCompleted" value={isCompleted} onChange={(e) => setIsCompleted(e.target.value)} />
                <input type="text" placeholder="Ingresa tu ID de usuario" name="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
                <input type="submit" value="O" onClick={TaskData} />
            </form>
        </div>
    )
}
//Quizás un error de indentación en el return()???

//Llamar formulario que crea la tarea
//Otro componente para mostrar listado de tares. Tabla o lista. Petición a la api para traer tareas creadas
//toca mandar id de usuario para crear task




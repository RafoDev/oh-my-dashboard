import Task from "./Task.js";
import renderChart from "./todoChart.js";

let tasksStats = { nTasks: 0, completed: 0 };
renderChart(tasksStats);
const todo = () => {
    const addButton = document.querySelector(".main__todo-button");
    const deleteButton = document.querySelector(".main__todo-task-delete");
    const input = document.querySelector(".main__todo-input");
    const container = document.querySelector(".main__todo-tasks-container");
    const text = document.querySelector(".main__todo-task-text");

    let tasks = [];
    let checkboxes = [];
    let removers = [];
    let texts = [];

    const findTaskIndex = (i) => {
        return tasks.findIndex((t) => t.id === i);
    };

    const printTasks = (...arrTasks) => {
        container.innerHTML = "";
        arrTasks.forEach((t) => {
            const { id, task, completed } = t;
            const checked = completed
                ? [
                      "main__todo-task-checkbox-checked",
                      "main__todo-task-text-checked",
                      "main__todo-task-delete-checked",
                  ]
                : ["", "", ""];

            container.innerHTML += `<div class="main__todo-task" data-index = ${id}>
                <div class="main__todo-task-checkbox ${checked[0]}"  data-index = ${id}>
                <i class="fa-solid fa-check"></i>
                </div>
                <p class="main__todo-task-text ${checked[1]}" data-index = ${id}>${task}</p>
                <div class="main__todo-task-delete ${checked[2]}" data-index = ${id} >
                <i class="fa-solid fa-xmark"></i>
                </div>
                </div>`;
        });
    };

    const updateTaskCheck = (i) => {
        tasks[i].completed = tasks[i].completed ? false : true;
    };

    function checkElement() {
        let i = this.getAttribute("data-index");
        i = findTaskIndex(+i);
        checkboxes[i].classList.toggle("main__todo-task-checkbox-checked");
        removers[i].classList.toggle("main__todo-task-delete-checked");
        texts[i].classList.toggle("main__todo-task-text-checked");
        updateTaskCheck(i);
    }
    const updateListeners = () => {
        checkboxes = document.querySelectorAll(".main__todo-task-checkbox");
        removers = document.querySelectorAll(".main__todo-task-delete");
        checkboxes.forEach((t) => t.addEventListener("click", checkElement));
        texts = document.querySelectorAll(".main__todo-task-text");
        removers.forEach((t) => t.addEventListener("click", deleteElement));
    };

    const updateCompletedTasks = (i) => {
        i = findTaskIndex(i);
        tasksStats.completed += tasks[i].completed ? 1 : 0;
    };

    function deleteElement() {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Si la tarea no fué completada se mostrará en el gráfico",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Borrada!", "La tarea fué eliminada", "success");
                let i = parseInt(this.getAttribute("data-index"));
                updateCompletedTasks(i);
                tasks = tasks.filter((t) => t.id !== i);
                printTasks(...tasks);
                updateListeners();
                renderChart(tasksStats);
            }
        });
    }

    const clearInput = () => {
        input.value = "";
    };

    const addTask = (e) => {
        e.preventDefault();
        const value = input.value;
        if(value===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡No puedes agregar una tarea vacía!',
              })
        }else{
            tasks = [...tasks, new Task(value)];
            tasksStats.nTasks++;
            printTasks(...tasks);
            updateListeners();
            clearInput();
            renderChart(tasksStats);
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: 'Se ha creado una nueva tarea',
                showConfirmButton: false,
                timer: 1000
              })
        }
    };
    addButton.addEventListener("click", addTask);
};

export { todo, tasksStats };

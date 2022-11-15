const listeners = (() => {
    document.getElementById("createButton").addEventListener("click", () => {
        domStuff.createProjectInput();
    });
})();

const projectFactory = (projectName, projectDescription, projectDueDate, todoTask) => {
    let name = projectName;
    let description = projectDescription;
    let dueDate = projectDueDate;
    let task = todoTask;
    return {name, description, dueDate, task};
};
// const todoFactory = (todoTask) => {
//     let task = todoTask;
//     return {task}
// }
const displayController = (() => {
    let projectCounter = 0;
    let existingProjects = [];
    let todoCounter = 0;
    let todoList = [];
    let createProject = (projectName, projectDescription, projectDueDate) => {
        existingProjects.push(projectFactory(projectName, projectDescription, projectDueDate)); 
        domStuff.appendProject(projectName, projectDescription, projectDueDate);
        console.log(existingProjects);
        projectCounter++;
        return existingProjects;
    }
    let createTask = (todoTask) => {
        todoList.push(projectFactory(todoTask));
        domStuff.appendProject(todoTask);
        console.log(todoList);
        todoCounter++;
        return todoList;
    }
    return {createProject, createTask};
})();

let domStuff = (() => {

    const projectsContainer = document.getElementById("projectsContainer");

    let createProjectInput = () => {
        let titleBox = document.createElement("input");
        let descriptionBox = document.createElement("input");
        let dueDateBox = document.createElement("input");
        let submitInput = document.createElement("button");
        submitInput.innerText = "Submit";
        projectsContainer.appendChild(titleBox);
        projectsContainer.appendChild(descriptionBox);
        projectsContainer.appendChild(dueDateBox);
        projectsContainer.appendChild(submitInput);

        submitInput.addEventListener("click", () => { 
            displayController.createProject(titleBox.value, descriptionBox.value, dueDateBox.value);

            titleBox.remove();
            descriptionBox.remove();
            dueDateBox.remove();
            submitInput.remove();
        });
    };
    let createTaskInput = () => {
        let taskBox = document.createElement("input");
        let submitInput = document.createElement("button");
        submitInput.innerText = "submit";
        projectsContainer.appendChild(taskBox);
        projectsContainer.appendChild(submitInput);

        submitInput.addEventListener("click", () => {
            displayController.createTask(taskBox.value);

            taskBox.remove();
            submitInput.remove();
        });
    };
    
    let appendProject = (projectName, projectDescription, projectDueDate) => {
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("projectDiv");
        projectsContainer.appendChild(projectDiv);

        let projectDueDateSection = document.createElement("div");
        projectDueDateSection.classList.add("dueDate");
        projectDiv.appendChild(projectDueDateSection);
        projectDueDateSection.innerText = "due in " + projectDueDate;

        let projectNameSection = document.createElement("div");
        projectNameSection.classList.add("title");
        projectDiv.appendChild(projectNameSection);
        projectNameSection.innerText = projectName;

        let projectDescriptionSection = document.createElement("div");
        projectDescriptionSection.classList.add("description");
        projectDiv.appendChild(projectDescriptionSection);
        projectDescriptionSection.innerText = projectDescription;

        let addTodoButton = document.createElement("button");
        addTodoButton.classList.add("addTodoButton");
        addTodoButton.innerText = "+ to-do";
        projectDiv.appendChild(addTodoButton);

        let removeProjectButton = document.createElement("button");
        removeProjectButton.classList.add("removeProjectButton");
        removeProjectButton.innerText = "delete project";
        projectDiv.appendChild(removeProjectButton);

        projectDiv.addEventListener("click", (e) => {
            if(e.target.nodeName == "DIV") {
                //go to this page
                console.log("Div Pressed");
            } else if(e.target.classList == "addTodoButton") {
                createTaskInput();
                console.log("add todo");
            }else if (e.target.classList == "removeProjectButton") {
                //remove this page
                console.log("Bad Button Pressed");
            };
        });
    };
    return {createProjectInput, appendProject};
})();

displayController.createProject("The Hobbit", "by JRR Tolkien", "30 days");
displayController.createProject("The Lord of the Rings", "by JRR Tolkien", "60 days")

const listeners = (() => {
    document.getElementById("createButton").addEventListener("click", () => {
        domStuff.createProjectInput();
    });
})();

const projectFactory = (projectName, projectDescription, projectDueDate) => {
    let name = projectName;
    let description = projectDescription;
    let dueDate = projectDueDate;
    let todoLists = [];
    return {name, description, dueDate, todoLists};
};

const displayController = (() => {
    let counter = 0;
    let existingProjects = [];
    let createProject = (projectName, projectDescription, projectDueDate) => {
        existingProjects.push(projectFactory(projectName, projectDescription, projectDueDate)); 
        domStuff.appendProject(projectName, projectDescription, projectDueDate);
        console.log(existingProjects);
        counter++;
        return existingProjects;
    }
    return {createProject};
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
    
    let appendProject = (projectName, projectDescription, projectDueDate) => {
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("projectDiv");
        projectsContainer.appendChild(projectDiv);

        let projectDueDateSection = document.createElement("div");
        projectDueDateSection.classList.add("dueDate");
        projectDiv.appendChild(projectDueDateSection);
        projectDueDateSection.innerText = projectDueDate;

        let projectNameSection = document.createElement("div");
        projectNameSection.classList.add("title");
        projectDiv.appendChild(projectNameSection);
        projectNameSection.innerText = projectName;

        let projectDescriptionSection = document.createElement("div");
        projectDescriptionSection.classList.add("description");
        projectDiv.appendChild(projectDescriptionSection);
        projectDescriptionSection.innerText = projectDescription;

        let removeProjectButton = document.createElement("button");
        removeProjectButton.classList.add("removeProjectButton");
        removeProjectButton.innerText = "delete project";
        projectDiv.appendChild(removeProjectButton);

        projectDiv.addEventListener("click", (e) => {
            if(e.target.nodeName == "DIV") {
                //go to this page
                console.log("Div Pressed");
            } else if (e.target.classList == "removeProjectButton") {
                //remove this page
                console.log("Bad Button Pressed");
            };
        });
    };
    return {createProjectInput, appendProject};
})();

displayController.createProject("The Hobbit", "by JRR Tolkien", "due in 30 days");
displayController.createProject("The Lord of the Rings", "by JRR Tolkien", "due in 60 days")

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
        domStuff.appendProject(projectName, counter);
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
    
    let appendProject = (projectName) => {
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("projectDiv");
        projectsContainer.appendChild(projectDiv);

        let projectNameSection = document.createElement("div");
        projectDiv.appendChild(projectNameSection);
        projectNameSection.innerText = projectName;

        let removeProjectButton = document.createElement("button");
        removeProjectButton.classList.add("removeProjectButton");
        removeProjectButton.innerText = "delete project";
        projectDiv.appendChild(removeProjectButton);

        projectDiv.addEventListener("click", (e) => {
            if(e.target.nodeName == "DIV") {
                //go to this page
                console.log("Div Pressed");
            } else if (e.target.nodeName == "BUTTON") {
                //remove this page
                console.log("Button Pressed");
            };
        });
    };
    return {createProjectInput, appendProject};
})();


// existingProjects[i] = {
//     title: "Lord of the Rings",
//     description: "by J.R.R. Tolkein",
//     dueDate: "pretty old",
// }
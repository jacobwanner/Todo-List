const listeners = (() => {
    document.getElementById("createButton").addEventListener("click", () => {
        domStuff.createProjectInput();
    });
})();

const projectFactory = (projectName) => {
    let name = projectName;
    let todoLists = [];
    return {name, todoLists};
};

const displayController = (() => {
    let counter = 0;
    let existingProjects = [];
    let createProject = (projectName) => {
        existingProjects.push(projectFactory(projectName, counter)); 
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
        let inputBox = document.createElement("input");
        let submitInput = document.createElement("button");
        submitInput.innerText = "Submit";
        projectsContainer.appendChild(inputBox);
        projectsContainer.appendChild(submitInput);

        submitInput.addEventListener("click", () => { 
            displayController.createProject(inputBox.value);

            inputBox.remove();
            submitInput.remove();
        })
    }
    
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
            }
        })
    }
    return {createProjectInput, appendProject};
})();


// existingProjects[i] = {
//     title: "Lord of the Rings",
//     description: "by J.R.R. Tolkein",
//     dueDate: "pretty old",
// }
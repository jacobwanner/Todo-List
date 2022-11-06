import { existingProjects, i, createProjectObject } from './project'

const createButton = document.getElementById("createButton");

createButton.addEventListener("click", () => {
    createProjectObject();
}); 
function createProjectDiv() {
    // div creations
    window['projectDiv_' + i] = document.createElement("div");
    window['projectDiv_' + i + '_Title'] = document.createElement("div");
    window['projectDiv_' + i + '_Description'] = document.createElement("div");
    window['projectDiv_' + i + '_DueDate'] = document.createElement("div");
    // div id naming
    window['projectDiv_' + i].id = "projectDiv_" + i;
    window['projectDiv_' + i + '_Title']
    window['projectDiv_' + i + '_Description']
    window['projectDiv_' + i + '_DueDate']
    // div appendChild
    document.getElementById("content").appendChild(window['projectDiv_' + i])
    document.getElementById("projectDiv_" + i).appendChild(window['projectDiv_' + i + '_Title'])
    document.getElementById("projectDiv_" + i).appendChild(window['projectDiv_' + i + '_Description'])
    document.getElementById("projectDiv_" + i).appendChild(window['projectDiv_' + i + '_DueDate'])
    // div innerHTML
    window['projectDiv_' + i + '_Title'].innerHTML = existingProjects[i].title
    window['projectDiv_' + i + '_Description'].innerHTML = existingProjects[i].description
    window['projectDiv_' + i + '_DueDate'].innerHTML = existingProjects[i].dueDate
}

export {createButton, createProjectDiv}

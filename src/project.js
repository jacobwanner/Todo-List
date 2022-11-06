import {createButton, createProjectDiv} from './domStuff'

const existingProjects = [];
let i = 1;

existingProjects[0] = {
    title: "Lord of the Rings",
    description: "by J.R.R. Tolkein",
    dueDate: "pretty old",
}
console.log(existingProjects[0])

function createProjectObject() {
    existingProjects[i] = { 
        title: prompt("what is the title of this project? "),
        description: prompt("Please Give a brief description of the project: "),
        dueDate: prompt("what is the due date :"),
    }
    createProjectDiv()
    console.log(existingProjects.length)
    console.log(existingProjects[i])
    return i++;
}

export { existingProjects, i, createProjectObject }

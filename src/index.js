const createButton = document.getElementById("createButton");
createButton.addEventListener("click", createProjectObject);
const allAddCheckboxButtons = document.getElementsByClassName('addCheckboxButton');

const existingProjects = [];
let i = 0;
let h = 0;
existingProjects[i] = {
    title: "Lord of the Rings",
    description: "by J.R.R. Tolkein",
    dueDate: "pretty old",
}

createProjectDiv()
i = 1

console.log(existingProjects[0])

function createProjectDiv() {
    // div creations
    window['project_' + i + '_Container'] = document.createElement("div");
    window['project_' + i + '_Title'] = document.createElement("div");
    window['project_' + i + '_Description'] = document.createElement("div");
    window['project_' + i + '_DueDate'] = document.createElement("div");
    window['project_' + i + '_Checklist'] = document.createElement("div");
    window['project_' + i + '_AddCheckboxButton'] = document.createElement("button");
    // div id naming
    window['project_' + i + '_Container'].id = "project_" + i + '_Container';
    window['project_' + i + '_Title'].id = 'project_' + i + '_Title';
    window['project_' + i + '_Description'].id = 'project_' + i + '_Description';
    window['project_' + i + '_DueDate'].id = 'project_' + i + '_DueDate';
    window['project_' + i + '_Checklist'].id = 'project_' + i + '_Checklist';
    window['project_' + i + '_AddCheckboxButton'].id = 'project_' + i + '_AddCheckboxButton';
    // div class naming
    window['project_' + i + '_Container'].className = "projectContainer"
    window['project_' + i + '_Title'].className = "projectTitle"
    window['project_' + i + '_Description'].className = "projectDescription"
    window['project_' + i + '_DueDate'].className = "projectDueDate"
    window['project_' + i + '_Checklist'].className = "projectChecklist"
    window['project_' + i + '_AddCheckboxButton'].className = 'addCheckboxButton';
    // div appendChild
    document.getElementById("content").appendChild(window['project_' + i + '_Container'])
    document.getElementById('project_' + i + '_Container').appendChild(window['project_' + i + '_Title'])
    document.getElementById('project_' + i + '_Container').appendChild(window['project_' + i + '_Description'])
    document.getElementById('project_' + i + '_Container').appendChild(window['project_' + i + '_DueDate'])
    document.getElementById('project_' + i + '_Container').appendChild(window['project_' + i + '_Checklist'])
    document.getElementById('project_' + i + '_Checklist').appendChild(window['project_' + i + '_AddCheckboxButton'])
    // div innerHTML
    window['project_' + i + '_Title'].innerHTML = existingProjects[i].title
    window['project_' + i + '_Description'].innerHTML = existingProjects[i].description
    window['project_' + i + '_DueDate'].innerHTML = existingProjects[i].dueDate
    window['project_' + i + '_AddCheckboxButton'].innerHTML = "+";
    // eventlistener
    window['project_' + i + '_AddCheckboxButton'].addEventListener("click", createCheckboxObject);
    // checklist array creation
    window['project_' + i + '_ChecklistArray'] = [];
}

function createCheckboxDiv() {
    // div creation
    window['project_' + i + '_Checkbox_' + window['project_' + i + '_ChecklistArray'].length] = document.createElement("div");
    // checkbox class naming
    window['project_' + i + '_Checkbox_' + window['project_' + i + '_ChecklistArray'].length].className = "checkboxes";
    // div appendChild
    document.getElementById('project_' + i + '_Checklist').appendChild(window['project_' + i + '_Checkbox_' + window['project_' + i + '_ChecklistArray'].length]);
    // div innerHTML
    window['project_' + i + '_Checkbox_' + window['project_' + i + '_ChecklistArray'].length].innerHTML = prompt("checkbox")
}

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

function createCheckboxObject() {
    window['project_' + i + '_ChecklistArray'][h] = {
        text: prompt("checkbox")
    }
    createCheckboxDiv()
    console.log(window['project_' + i + '_ChecklistArray'].length)
    console.log(window['project_' + i + '_ChecklistArray'][h])
    return h++;
}


//  or could try a for loop and input the prompt directly into an object in the array like how you did with existingProjects

// after checklists are complete go on to css and making the page look better


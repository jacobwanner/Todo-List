let project_0 = {
    title: prompt("what is the title of this project? "),
    description: prompt("Please Give a brief description of the project: "),
    dueDate: prompt("what is the due date :"),
}
const existingProjects = [];
existingProjects.push(project_0)

console.log(existingProjects(0).title)

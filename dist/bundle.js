/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdGVuZXJzID0gKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZG9tU3R1ZmYuY3JlYXRlUHJvamVjdElucHV0KCk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3REdWVEYXRlLCB0b2RvVGFzaykgPT4ge1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcclxuICAgIGxldCBkdWVEYXRlID0gcHJvamVjdER1ZURhdGU7XHJcbiAgICBsZXQgdGFzayA9IHRvZG9UYXNrO1xyXG4gICAgcmV0dXJuIHtuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgdGFza307XHJcbn07XHJcbi8vIGNvbnN0IHRvZG9GYWN0b3J5ID0gKHRvZG9UYXNrKSA9PiB7XHJcbi8vICAgICBsZXQgdGFzayA9IHRvZG9UYXNrO1xyXG4vLyAgICAgcmV0dXJuIHt0YXNrfVxyXG4vLyB9XHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcclxuICAgIGxldCBwcm9qZWN0Q291bnRlciA9IDA7XHJcbiAgICBsZXQgZXhpc3RpbmdQcm9qZWN0cyA9IFtdO1xyXG4gICAgbGV0IHRvZG9Db3VudGVyID0gMDtcclxuICAgIGxldCB0b2RvTGlzdCA9IFtdO1xyXG4gICAgbGV0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgcHJvamVjdER1ZURhdGUpID0+IHtcclxuICAgICAgICBleGlzdGluZ1Byb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgcHJvamVjdER1ZURhdGUpKTsgXHJcbiAgICAgICAgZG9tU3R1ZmYuYXBwZW5kUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCBwcm9qZWN0RHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0cyk7XHJcbiAgICAgICAgcHJvamVjdENvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gZXhpc3RpbmdQcm9qZWN0cztcclxuICAgIH1cclxuICAgIGxldCBjcmVhdGVUYXNrID0gKHRvZG9UYXNrKSA9PiB7XHJcbiAgICAgICAgdG9kb0xpc3QucHVzaChwcm9qZWN0RmFjdG9yeSh0b2RvVGFzaykpO1xyXG4gICAgICAgIGRvbVN0dWZmLmFwcGVuZFByb2plY3QodG9kb1Rhc2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KTtcclxuICAgICAgICB0b2RvQ291bnRlcisrO1xyXG4gICAgICAgIHJldHVybiB0b2RvTGlzdDtcclxuICAgIH1cclxuICAgIHJldHVybiB7Y3JlYXRlUHJvamVjdCwgY3JlYXRlVGFza307XHJcbn0pKCk7XHJcblxyXG5sZXQgZG9tU3R1ZmYgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgY3JlYXRlUHJvamVjdElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGV0IHN1Ym1pdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzdWJtaXRJbnB1dC5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQm94KTtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJveCk7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUJveCk7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xyXG5cclxuICAgICAgICBzdWJtaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCh0aXRsZUJveC52YWx1ZSwgZGVzY3JpcHRpb25Cb3gudmFsdWUsIGR1ZURhdGVCb3gudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVCb3gucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkdWVEYXRlQm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJtaXRJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBsZXQgY3JlYXRlVGFza0lucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YXNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGxldCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VibWl0SW5wdXQuaW5uZXJUZXh0ID0gXCJzdWJtaXRcIjtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQm94KTtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRJbnB1dCk7XHJcblxyXG4gICAgICAgIHN1Ym1pdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZVRhc2sodGFza0JveC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICB0YXNrQm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJtaXRJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxldCBhcHBlbmRQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3REdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0RHVlRGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REdWVEYXRlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlU2VjdGlvbik7XHJcbiAgICAgICAgcHJvamVjdER1ZURhdGVTZWN0aW9uLmlubmVyVGV4dCA9IFwiZHVlIGluIFwiICsgcHJvamVjdER1ZURhdGU7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3ROYW1lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVNlY3Rpb24pO1xyXG4gICAgICAgIHByb2plY3ROYW1lU2VjdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3REZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uU2VjdGlvbik7XHJcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uU2VjdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0RGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIGxldCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhZGRUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRUb2RvQnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZFRvZG9CdXR0b24uaW5uZXJUZXh0ID0gXCIrIHRvLWRvXCI7XHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uKTtcclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RCdXR0b25cIik7XHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcImRlbGV0ZSBwcm9qZWN0XCI7XHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcclxuXHJcbiAgICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQubm9kZU5hbWUgPT0gXCJESVZcIikge1xyXG4gICAgICAgICAgICAgICAgLy9nbyB0byB0aGlzIHBhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGl2IFByZXNzZWRcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QgPT0gXCJhZGRUb2RvQnV0dG9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2tJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgdG9kb1wiKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdCA9PSBcInJlbW92ZVByb2plY3RCdXR0b25cIikge1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgdGhpcyBwYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJhZCBCdXR0b24gUHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RJbnB1dCwgYXBwZW5kUHJvamVjdH07XHJcbn0pKCk7XHJcblxyXG5kaXNwbGF5Q29udHJvbGxlci5jcmVhdGVQcm9qZWN0KFwiVGhlIEhvYmJpdFwiLCBcImJ5IEpSUiBUb2xraWVuXCIsIFwiMzAgZGF5c1wiKTtcclxuZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdChcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcImJ5IEpSUiBUb2xraWVuXCIsIFwiNjAgZGF5c1wiKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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

        let projectNameSection = document.createElement("div");
        projectDiv.appendChild(projectNameSection);
        projectNameSection.innerText = projectName;

        let projectDescriptionSection = document.createElement("div");
        projectDiv.appendChild(projectDescriptionSection);
        projectDescriptionSection.innerText = projectDescription;

        let projectDueDateSection = document.createElement("div");
        projectDiv.appendChild(projectDueDateSection);
        projectDueDateSection.innerText = projectDueDate;

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


displayController.createProject("The Lord of the Rings", "by JRR Tolkien", "due in 60 days")

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3RlbmVycyA9ICgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRvbVN0dWZmLmNyZWF0ZVByb2plY3RJbnB1dCgpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCBwcm9qZWN0RHVlRGF0ZSkgPT4ge1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcclxuICAgIGxldCBkdWVEYXRlID0gcHJvamVjdER1ZURhdGU7XHJcbiAgICBsZXQgdG9kb0xpc3RzID0gW107XHJcbiAgICByZXR1cm4ge25hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0b2RvTGlzdHN9O1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgbGV0IGV4aXN0aW5nUHJvamVjdHMgPSBbXTtcclxuICAgIGxldCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3REdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3REdWVEYXRlKSk7IFxyXG4gICAgICAgIGRvbVN0dWZmLmFwcGVuZFByb2plY3QocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgcHJvamVjdER1ZURhdGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdHMpO1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gZXhpc3RpbmdQcm9qZWN0cztcclxuICAgIH1cclxuICAgIHJldHVybiB7Y3JlYXRlUHJvamVjdH07XHJcbn0pKCk7XHJcblxyXG5sZXQgZG9tU3R1ZmYgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgY3JlYXRlUHJvamVjdElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGV0IHN1Ym1pdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzdWJtaXRJbnB1dC5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQm94KTtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJveCk7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUJveCk7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xyXG5cclxuICAgICAgICBzdWJtaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCh0aXRsZUJveC52YWx1ZSwgZGVzY3JpcHRpb25Cb3gudmFsdWUsIGR1ZURhdGVCb3gudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVCb3gucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkdWVEYXRlQm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJtaXRJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxldCBhcHBlbmRQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3REdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWN0aW9uKTtcclxuICAgICAgICBwcm9qZWN0TmFtZVNlY3Rpb24uaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvblNlY3Rpb24pO1xyXG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvblNlY3Rpb24uaW5uZXJUZXh0ID0gcHJvamVjdERlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdER1ZURhdGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REdWVEYXRlU2VjdGlvbik7XHJcbiAgICAgICAgcHJvamVjdER1ZURhdGVTZWN0aW9uLmlubmVyVGV4dCA9IHByb2plY3REdWVEYXRlO1xyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlUHJvamVjdEJ1dHRvblwiKTtcclxuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiZGVsZXRlIHByb2plY3RcIjtcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pO1xyXG5cclxuICAgICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5ub2RlTmFtZSA9PSBcIkRJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL2dvIHRvIHRoaXMgcGFnZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXYgUHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSBcIkJVVFRPTlwiKSB7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSB0aGlzIHBhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIFByZXNzZWRcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0SW5wdXQsIGFwcGVuZFByb2plY3R9O1xyXG59KSgpO1xyXG5cclxuXHJcbmRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoXCJUaGUgTG9yZCBvZiB0aGUgUmluZ3NcIiwgXCJieSBKUlIgVG9sa2llblwiLCBcImR1ZSBpbiA2MCBkYXlzXCIpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3RlbmVycyA9ICgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRvbVN0dWZmLmNyZWF0ZVByb2plY3RJbnB1dCgpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcblxyXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCBwcm9qZWN0RHVlRGF0ZSkgPT4ge1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcclxuICAgIGxldCBkdWVEYXRlID0gcHJvamVjdER1ZURhdGU7XHJcbiAgICBsZXQgdG9kb0xpc3RzID0gW107XHJcbiAgICByZXR1cm4ge25hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCB0b2RvTGlzdHN9O1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgbGV0IGV4aXN0aW5nUHJvamVjdHMgPSBbXTtcclxuICAgIGxldCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3REdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIHByb2plY3REdWVEYXRlKSk7IFxyXG4gICAgICAgIGRvbVN0dWZmLmFwcGVuZFByb2plY3QocHJvamVjdE5hbWUsIGNvdW50ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdHMpO1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gZXhpc3RpbmdQcm9qZWN0cztcclxuICAgIH1cclxuICAgIHJldHVybiB7Y3JlYXRlUHJvamVjdH07XHJcbn0pKCk7XHJcblxyXG5sZXQgZG9tU3R1ZmYgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgY3JlYXRlUHJvamVjdElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGV0IGR1ZURhdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbGV0IHN1Ym1pdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzdWJtaXRJbnB1dC5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQm94KTtcclxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJveCk7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUJveCk7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xyXG5cclxuICAgICAgICBzdWJtaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCh0aXRsZUJveC52YWx1ZSwgZGVzY3JpcHRpb25Cb3gudmFsdWUsIGR1ZURhdGVCb3gudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgdGl0bGVCb3gucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkdWVEYXRlQm94LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzdWJtaXRJbnB1dC5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGxldCBhcHBlbmRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWN0aW9uKTtcclxuICAgICAgICBwcm9qZWN0TmFtZVNlY3Rpb24uaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgIGxldCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0QnV0dG9uXCIpO1xyXG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJkZWxldGUgcHJvamVjdFwiO1xyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiRElWXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vZ28gdG8gdGhpcyBwYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpdiBQcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQlVUVE9OXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIHRoaXMgcGFnZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gUHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RJbnB1dCwgYXBwZW5kUHJvamVjdH07XHJcbn0pKCk7XHJcblxyXG5cclxuLy8gZXhpc3RpbmdQcm9qZWN0c1tpXSA9IHtcclxuLy8gICAgIHRpdGxlOiBcIkxvcmQgb2YgdGhlIFJpbmdzXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJieSBKLlIuUi4gVG9sa2VpblwiLFxyXG4vLyAgICAgZHVlRGF0ZTogXCJwcmV0dHkgb2xkXCIsXHJcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdGVuZXJzID0gKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZG9tU3R1ZmYuY3JlYXRlUHJvamVjdElucHV0KCk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuXHJcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICBsZXQgbmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgbGV0IHRvZG9MaXN0cyA9IFtdO1xyXG4gICAgcmV0dXJuIHtuYW1lLCB0b2RvTGlzdHN9O1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgbGV0IGV4aXN0aW5nUHJvamVjdHMgPSBbXTtcclxuICAgIGxldCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0cy5wdXNoKHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLCBjb3VudGVyKSk7IFxyXG4gICAgICAgIGRvbVN0dWZmLmFwcGVuZFByb2plY3QocHJvamVjdE5hbWUsIGNvdW50ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdHMpO1xyXG4gICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICByZXR1cm4gZXhpc3RpbmdQcm9qZWN0cztcclxuICAgIH1cclxuICAgIHJldHVybiB7Y3JlYXRlUHJvamVjdH07XHJcbn0pKCk7XHJcblxyXG5sZXQgZG9tU3R1ZmYgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgY3JlYXRlUHJvamVjdElucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBsZXQgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHN1Ym1pdElucHV0LmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcclxuXHJcbiAgICAgICAgc3VibWl0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoaW5wdXRCb3gudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaW5wdXRCb3gucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdElucHV0LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBhcHBlbmRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVTZWN0aW9uKTtcclxuICAgICAgICBwcm9qZWN0TmFtZVNlY3Rpb24uaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gICAgICAgIGxldCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0QnV0dG9uXCIpO1xyXG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJkZWxldGUgcHJvamVjdFwiO1xyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiRElWXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vZ28gdG8gdGhpcyBwYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpdiBQcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiQlVUVE9OXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIHRoaXMgcGFnZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gUHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RJbnB1dCwgYXBwZW5kUHJvamVjdH07XHJcbn0pKCk7XHJcblxyXG5cclxuLy8gZXhpc3RpbmdQcm9qZWN0c1tpXSA9IHtcclxuLy8gICAgIHRpdGxlOiBcIkxvcmQgb2YgdGhlIFJpbmdzXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJieSBKLlIuUi4gVG9sa2VpblwiLFxyXG4vLyAgICAgZHVlRGF0ZTogXCJwcmV0dHkgb2xkXCIsXHJcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
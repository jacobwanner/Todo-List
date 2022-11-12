/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const listeners = (() => {
    document.querySelector("#createButton").addEventListener("click", () => domStuff.createProjectInput());
})

const projectFactory = (projectName) => {
    let name = projectName
    let todoLists = []
    return {name, todoLists}
};

const displayController = (() => {
    let counter = 0;
    let existingProjects = [];
    let createProject = (projectName) => {
        existingProjects.push(projectFactory(projectName, counter)); 
        domStuff.appendProject(projectName, counter);
        console.log(existingProjects);
        counter++;
        return existingProjects
    }
    return {createProject}
})

let domStuff = (() => {

    const projectsContainer = document.querySelector("#projectsContainer")

    let createProjectInput = () => {
        let inputBox = document.createElement("input")
        let submitInput = document.createElement("button")
        submitInput.innerText = "Submit"
        projectsContainer.appendChild(inputBox)
        projectsContainer.appendChild(submitInput)

        submitInput.addEventListener("click", () => { 
            displayController.createProject(inputBox.value)

            inputBox.remove()
            submitInput.remove()
        })
    }
    
    let appendProject = (projectName) => {
        let projectDiv = document.createElement("div")
        projectDiv.classList.add("projectDiv")
        projectsContainer.appendChild(projectDiv)

        let projectNameSection = document.createElement("div")
        projectDiv.appendChild(projectNameSection)
        projectNameSection.innerText = projectName

        let removeProjectButton = document.createElement("button")
        removeProjectButton.classList.add("removeProjectButton")
        removeProjectButton.innerText = "x"
        projectDiv.appendChild(removeProjectButton)

        // projectDiv.addEventListener("click", (e) => {
        //     if(e.target.nodeName == "DIV") {
        //         //go to this page
        //         console.log("Div Pressed")
        //     } else if (e.target.nodeName == "BUTTON") {
        //         //remove this page
        //         console.log("Button Pressed")
        //     }
        // })
    }
    return {createProjectInput, appendProject}
})


// existingProjects[i] = {
//     title: "Lord of the Rings",
//     description: "by J.R.R. Tolkein",
//     dueDate: "pretty old",
// }
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdGVuZXJzID0gKCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkb21TdHVmZi5jcmVhdGVQcm9qZWN0SW5wdXQoKSk7XHJcbn0pXHJcblxyXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgbGV0IG5hbWUgPSBwcm9qZWN0TmFtZVxyXG4gICAgbGV0IHRvZG9MaXN0cyA9IFtdXHJcbiAgICByZXR1cm4ge25hbWUsIHRvZG9MaXN0c31cclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIGxldCBleGlzdGluZ1Byb2plY3RzID0gW107XHJcbiAgICBsZXQgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIGV4aXN0aW5nUHJvamVjdHMucHVzaChwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZSwgY291bnRlcikpOyBcclxuICAgICAgICBkb21TdHVmZi5hcHBlbmRQcm9qZWN0KHByb2plY3ROYW1lLCBjb3VudGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3RzKTtcclxuICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUHJvamVjdHNcclxuICAgIH1cclxuICAgIHJldHVybiB7Y3JlYXRlUHJvamVjdH1cclxufSlcclxuXHJcbmxldCBkb21TdHVmZiA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzQ29udGFpbmVyXCIpXHJcblxyXG4gICAgbGV0IGNyZWF0ZVByb2plY3RJbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaW5wdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICBsZXQgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgc3VibWl0SW5wdXQuaW5uZXJUZXh0ID0gXCJTdWJtaXRcIlxyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Qm94KVxyXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KVxyXG5cclxuICAgICAgICBzdWJtaXRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4geyBcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdChpbnB1dEJveC52YWx1ZSlcclxuXHJcbiAgICAgICAgICAgIGlucHV0Qm94LnJlbW92ZSgpXHJcbiAgICAgICAgICAgIHN1Ym1pdElucHV0LnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IGFwcGVuZFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2XCIpXHJcbiAgICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3ROYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lU2VjdGlvbilcclxuICAgICAgICBwcm9qZWN0TmFtZVNlY3Rpb24uaW5uZXJUZXh0ID0gcHJvamVjdE5hbWVcclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlUHJvamVjdEJ1dHRvblwiKVxyXG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJ4XCJcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pXHJcblxyXG4gICAgICAgIC8vIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmKGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiRElWXCIpIHtcclxuICAgICAgICAvLyAgICAgICAgIC8vZ28gdG8gdGhpcyBwYWdlXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkRpdiBQcmVzc2VkXCIpXHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT0gXCJCVVRUT05cIikge1xyXG4gICAgICAgIC8vICAgICAgICAgLy9yZW1vdmUgdGhpcyBwYWdlXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBQcmVzc2VkXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0SW5wdXQsIGFwcGVuZFByb2plY3R9XHJcbn0pXHJcblxyXG5cclxuLy8gZXhpc3RpbmdQcm9qZWN0c1tpXSA9IHtcclxuLy8gICAgIHRpdGxlOiBcIkxvcmQgb2YgdGhlIFJpbmdzXCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogXCJieSBKLlIuUi4gVG9sa2VpblwiLFxyXG4vLyAgICAgZHVlRGF0ZTogXCJwcmV0dHkgb2xkXCIsXHJcbi8vIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
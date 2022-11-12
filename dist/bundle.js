/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlQnV0dG9uXCIpO1xyXG5jcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVByb2plY3RPYmplY3QpO1xyXG5jb25zdCBhbGxBZGRDaGVja2JveEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZGRDaGVja2JveEJ1dHRvbicpO1xyXG5cclxuY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IFtdO1xyXG5sZXQgaSA9IDA7XHJcbmxldCBoID0gMDtcclxuZXhpc3RpbmdQcm9qZWN0c1tpXSA9IHtcclxuICAgIHRpdGxlOiBcIkxvcmQgb2YgdGhlIFJpbmdzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJieSBKLlIuUi4gVG9sa2VpblwiLFxyXG4gICAgZHVlRGF0ZTogXCJwcmV0dHkgb2xkXCIsXHJcbn1cclxuXHJcbmNyZWF0ZVByb2plY3REaXYoKVxyXG5pID0gMVxyXG5cclxuY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0c1swXSlcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXYoKSB7XHJcbiAgICAvLyBkaXYgY3JlYXRpb25zXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0NvbnRhaW5lciddID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfVGl0bGUnXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0Rlc2NyaXB0aW9uJ10gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19EdWVEYXRlJ10gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3QnXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0FkZENoZWNrYm94QnV0dG9uJ10gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgLy8gZGl2IGlkIG5hbWluZ1xyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19Db250YWluZXInXS5pZCA9IFwicHJvamVjdF9cIiArIGkgKyAnX0NvbnRhaW5lcic7XHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX1RpdGxlJ10uaWQgPSAncHJvamVjdF8nICsgaSArICdfVGl0bGUnO1xyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19EZXNjcmlwdGlvbiddLmlkID0gJ3Byb2plY3RfJyArIGkgKyAnX0Rlc2NyaXB0aW9uJztcclxuICAgIHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfRHVlRGF0ZSddLmlkID0gJ3Byb2plY3RfJyArIGkgKyAnX0R1ZURhdGUnO1xyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3QnXS5pZCA9ICdwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3QnO1xyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19BZGRDaGVja2JveEJ1dHRvbiddLmlkID0gJ3Byb2plY3RfJyArIGkgKyAnX0FkZENoZWNrYm94QnV0dG9uJztcclxuICAgIC8vIGRpdiBjbGFzcyBuYW1pbmdcclxuICAgIHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfQ29udGFpbmVyJ10uY2xhc3NOYW1lID0gXCJwcm9qZWN0Q29udGFpbmVyXCJcclxuICAgIHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfVGl0bGUnXS5jbGFzc05hbWUgPSBcInByb2plY3RUaXRsZVwiXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0Rlc2NyaXB0aW9uJ10uY2xhc3NOYW1lID0gXCJwcm9qZWN0RGVzY3JpcHRpb25cIlxyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19EdWVEYXRlJ10uY2xhc3NOYW1lID0gXCJwcm9qZWN0RHVlRGF0ZVwiXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0NoZWNrbGlzdCddLmNsYXNzTmFtZSA9IFwicHJvamVjdENoZWNrbGlzdFwiXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0FkZENoZWNrYm94QnV0dG9uJ10uY2xhc3NOYW1lID0gJ2FkZENoZWNrYm94QnV0dG9uJztcclxuICAgIC8vIGRpdiBhcHBlbmRDaGlsZFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfQ29udGFpbmVyJ10pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF8nICsgaSArICdfQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQod2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19UaXRsZSddKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfJyArIGkgKyAnX0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfRGVzY3JpcHRpb24nXSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0XycgKyBpICsgJ19Db250YWluZXInKS5hcHBlbmRDaGlsZCh3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0R1ZURhdGUnXSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0XycgKyBpICsgJ19Db250YWluZXInKS5hcHBlbmRDaGlsZCh3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0NoZWNrbGlzdCddKVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfJyArIGkgKyAnX0NoZWNrbGlzdCcpLmFwcGVuZENoaWxkKHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfQWRkQ2hlY2tib3hCdXR0b24nXSlcclxuICAgIC8vIGRpdiBpbm5lckhUTUxcclxuICAgIHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfVGl0bGUnXS5pbm5lckhUTUwgPSBleGlzdGluZ1Byb2plY3RzW2ldLnRpdGxlXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0Rlc2NyaXB0aW9uJ10uaW5uZXJIVE1MID0gZXhpc3RpbmdQcm9qZWN0c1tpXS5kZXNjcmlwdGlvblxyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19EdWVEYXRlJ10uaW5uZXJIVE1MID0gZXhpc3RpbmdQcm9qZWN0c1tpXS5kdWVEYXRlXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0FkZENoZWNrYm94QnV0dG9uJ10uaW5uZXJIVE1MID0gXCIrXCI7XHJcbiAgICAvLyBldmVudGxpc3RlbmVyXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0FkZENoZWNrYm94QnV0dG9uJ10uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZUNoZWNrYm94T2JqZWN0KTtcclxuICAgIC8vIGNoZWNrbGlzdCBhcnJheSBjcmVhdGlvblxyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3RBcnJheSddID0gW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94RGl2KCkge1xyXG4gICAgLy8gZGl2IGNyZWF0aW9uXHJcbiAgICB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0NoZWNrYm94XycgKyB3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0NoZWNrbGlzdEFycmF5J10ubGVuZ3RoXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAvLyBjaGVja2JveCBjbGFzcyBuYW1pbmdcclxuICAgIHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfQ2hlY2tib3hfJyArIHdpbmRvd1sncHJvamVjdF8nICsgaSArICdfQ2hlY2tsaXN0QXJyYXknXS5sZW5ndGhdLmNsYXNzTmFtZSA9IFwiY2hlY2tib3hlc1wiO1xyXG4gICAgLy8gZGl2IGFwcGVuZENoaWxkXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF8nICsgaSArICdfQ2hlY2tsaXN0JykuYXBwZW5kQ2hpbGQod2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2JveF8nICsgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3RBcnJheSddLmxlbmd0aF0pO1xyXG4gICAgLy8gZGl2IGlubmVySFRNTFxyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2JveF8nICsgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3RBcnJheSddLmxlbmd0aF0uaW5uZXJIVE1MID0gcHJvbXB0KFwiY2hlY2tib3hcIilcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdE9iamVjdCgpIHtcclxuICAgIGV4aXN0aW5nUHJvamVjdHNbaV0gPSB7IFxyXG4gICAgICAgIHRpdGxlOiBwcm9tcHQoXCJ3aGF0IGlzIHRoZSB0aXRsZSBvZiB0aGlzIHByb2plY3Q/IFwiKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogcHJvbXB0KFwiUGxlYXNlIEdpdmUgYSBicmllZiBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdDogXCIpLFxyXG4gICAgICAgIGR1ZURhdGU6IHByb21wdChcIndoYXQgaXMgdGhlIGR1ZSBkYXRlIDpcIiksXHJcbiAgICB9XHJcbiAgICBjcmVhdGVQcm9qZWN0RGl2KClcclxuICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdHMubGVuZ3RoKVxyXG4gICAgY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0c1tpXSlcclxuICAgIHJldHVybiBpKys7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94T2JqZWN0KCkge1xyXG4gICAgd2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3RBcnJheSddW2hdID0ge1xyXG4gICAgICAgIHRleHQ6IHByb21wdChcImNoZWNrYm94XCIpXHJcbiAgICB9XHJcbiAgICBjcmVhdGVDaGVja2JveERpdigpXHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3dbJ3Byb2plY3RfJyArIGkgKyAnX0NoZWNrbGlzdEFycmF5J10ubGVuZ3RoKVxyXG4gICAgY29uc29sZS5sb2cod2luZG93Wydwcm9qZWN0XycgKyBpICsgJ19DaGVja2xpc3RBcnJheSddW2hdKVxyXG4gICAgcmV0dXJuIGgrKztcclxufVxyXG5cclxuXHJcbi8vICBvciBjb3VsZCB0cnkgYSBmb3IgbG9vcCBhbmQgaW5wdXQgdGhlIHByb21wdCBkaXJlY3RseSBpbnRvIGFuIG9iamVjdCBpbiB0aGUgYXJyYXkgbGlrZSBob3cgeW91IGRpZCB3aXRoIGV4aXN0aW5nUHJvamVjdHNcclxuXHJcbi8vIGFmdGVyIGNoZWNrbGlzdHMgYXJlIGNvbXBsZXRlIGdvIG9uIHRvIGNzcyBhbmQgbWFraW5nIHRoZSBwYWdlIGxvb2sgYmV0dGVyXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
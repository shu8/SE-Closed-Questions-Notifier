function saveToLocalStorage(name, data) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("SE-QuestionClosedNotifier-" + name, data);
    } else {
        return "Error: Your browser does not support Local Storage";
    }
}

function getFromLocalStorage(name) {
    if (typeof (Storage) !== "undefined") {
        return localStorage.getItem("SE-QuestionClosedNotifier-" + name);
    }
}
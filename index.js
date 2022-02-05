"use strict";
//how to execute
exports.__esModule = true;
// tsc index.ts
// node index.js
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
//these are type annotations
var logTodo = function (id, title, completed) {
    console.log("\n  The Todo with ID: ".concat(id, "\n  Has a title of: ").concat(title, "\n  Is it finished? ").concat(completed, "\n"));
};

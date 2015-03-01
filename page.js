'use strict';

var AngularPage = function () {
    browser.get('http://todomvc.com/examples/angularjs');
};

AngularPage.prototype = Object.create({}, {
    newTodo: { get: function () { return element(by.id('new-todo')); }},
    todoList: { get: function () { return element.all(by.repeater('todo in todos')); }},
    clickAtListElement: { value: function (i) { return this.todoList.get(i).element(by.model('todo.completed')).click(); }},
    activeBtn: { get: function () { return element(by.linkText('Active')); }},
    allBtn: { get: function () { return element(by.linkText('All')); }},
    completedBtn: { get: function () { return element(by.linkText('Completed')); }},
    destroyElement: { value: function (i) { return this.todoList.get(i).element(by.css('.destroy')).click(); }}

});

module.exports = AngularPage;

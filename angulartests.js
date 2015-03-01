'use strict';
var AngularPage = require('./page.js');
describe('test angular application', function () {
    var page;
    var firstElement = 'first';
    var secondElement = 'second';
    beforeEach(function () {
        page = new AngularPage();
    });
    it('should add the item', function () {
        page.newTodo.sendKeys(firstElement);
        page.newTodo.submit();
        expect(page.todoList.count()).toEqual(1);
        expect(page.todoList.get(0).getText()).toEqual(firstElement);
        page.clickAtListElement(0)
    });

    it('should add one more item', function () {
        page.newTodo.sendKeys(secondElement);
        page.newTodo.submit();
        expect(page.todoList.count()).toEqual(2);
        expect(page.todoList.get(1).getText()).toEqual(secondElement);
    });
    it('should show only Active elements', function () {
        page.activeBtn.click()
        expect(page.todoList.count()).toEqual(1);
        expect(page.todoList.get(0).getText()).toEqual(secondElement);
    });
    it('should show only Completed elements', function () {
        page.allBtn.click()
        page.completedBtn.click()
        expect(page.todoList.count()).toEqual(1);
        expect(page.todoList.get(0).getText()).toEqual(firstElement);
    });
    it('all elements should be deleted', function () {
        page.allBtn.click()
        expect(page.todoList.count()).toEqual(2);
        page.todoList.then(function (elems) {
            var i = elems.length - 1;
            while (i >= 0) {
                expect(browser.actions().mouseMove(page.todoList.get(i)).perform());
                expect(page.destroyElement(i));
                i = i - 1;
            }
        });
        expect(page.todoList.count()).toEqual(0);
    });
});



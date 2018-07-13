/**
 * Created by drderp45 on 30/07/2015.
 */

/*
    Classy Classes
    This kata is mainly aimed at the new JS ES6 Update introducing classes

    Task
    Your task is to complete a class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number,
    complete the get info property and getInfo method which should return 'Johns age is 34'
 */

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get info() {
        return this.getInfo()
    }

    getInfo() {
        return this._name + 's age is ' + this._age;
    }
}
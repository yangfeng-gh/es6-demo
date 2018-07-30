// （1）@autobind

// autobind修饰器使得方法中的this对象，绑定原始对象。

import { autobind } from 'core-decorators';

class Person {
    @autobind
    getPerson() {
        return this;
    }
}

let person = new Person();
let getPerson = person.getPerson;

// getPerson() === person;
// true

// （2）@readonly

// readonly修饰器使得属性或方法不可写。

import { readonly } from 'core-decorators';

class Meal {
    @readonly
    entree = 'steak';
}

var dinner = new Meal();
dinner.entree = 'salmon';
// Cannot assign to read only property 'entree' of [object Object]

// （3）@override
// override修饰器检查子类的方法，是否正确覆盖了父类的同名方法，如果不正确会报错。

import { override } from 'core-decorators';

class Parent {
    speak(first, second) {}
}

class Child extends Parent {
    @override
    speak() {}
    // SyntaxError: Child#speak() does not properly override Parent#speak(first, second)
}

// or

class Child extends Parent {
    @override
    speaks() {}
    // SyntaxError: No descriptor matching Child#speaks() was found on the prototype chain.
    //
    //   Did you mean "speak"?
}

// （4）@deprecate (别名@deprecated)
// deprecate或deprecated修饰器在控制台显示一条警告，表示该方法将废除。

import { deprecate } from 'core-decorators';

class Person {
    @deprecate
    facepalm() {}

    @deprecate('We stopped facepalming')
    facepalmHard() {}

    @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
    facepalmHarder() {}
}

let person = new Person();

person.facepalm();
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person.facepalmHard();
// DEPRECATION Person#facepalmHard: We stopped facepalming

person.facepalmHarder();
// DEPRECATION Person#facepalmHarder: We stopped facepalming
//
//     See http://knowyourmeme.com/memes/facepalm for more details.
//

// （5）@suppressWarnings
// suppressWarnings修饰器抑制decorated修饰器导致的console.warn()调用。但是，异步代码发出的调用除外。

import { suppressWarnings } from 'core-decorators';

class Person {
    @deprecated
    facepalm() {}

    @suppressWarnings
    facepalmWithoutWarning() {
        this.facepalm();
    }
}

let person = new Person();

person.facepalmWithoutWarning();
// no warning is logged
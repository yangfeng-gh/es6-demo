/**
 * 存值函数和取值函数是设置在属性的descriptor对象上的
 */
class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html");
console.log("get" in descriptor);  // true
console.log("set" in descriptor);  // true
# SystemJS

另一种解决方法是使用 [SystemJS](https://github.com/systemjs/systemjs)。它是一个垫片库（polyfill），可以在浏览器内加载 ES6 模块、AMD 模块和 CommonJS 模块，将其转为 ES5 格式。它在后台调用的是 Google 的 Traceur 转码器。

使用时，先在网页内载入`system.js`文件。

```html
<script src="system.js"></script>
```

然后，使用`System.import`方法加载模块文件。

```html
<script>
  System.import('./app.js');
</script>
```

上面代码中的`./app`，指的是当前目录下的 app.js 文件。它可以是 ES6 模块文件，`System.import`会自动将其转码。

需要注意的是，`System.import`使用异步加载，返回一个 Promise 对象，可以针对这个对象编程。下面是一个模块文件。

```javascript
// app/es6-file.js:

export class q {
  constructor() {
    this.es6 = 'hello';
  }
}
```

然后，在网页内加载这个模块文件。

```html
<script>

System.import('app/es6-file').then(function(m) {
  console.log(new m.q().es6); // hello
});

</script>
```

上面代码中，`System.import`方法返回的是一个 Promise 对象，所以可以用`then`方法指定回调函数。
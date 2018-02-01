(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./export', 'fs'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./export'), require('fs'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._export, global.fs);
    global._import = mod.exports;
  }
})(this, function (_export) {
  'use strict';

  // 虽然x和y在两个语句中加载，但是它们对应的是同一个my_module实例。也就是说，import语句是 Singleton 模式。
  // 等同于
  // import {x, y} from './export';

  // 多次重复执行同一句import语句，只会执行一次，而不会执行多次
  // import { 'f' + 'oo' } from 'my_module'; // 报错

  // let module = 'my_module';
  // import { foo } from module; // 报错
  /*
  // 报错
  if (x === 1) {
    import { foo } from 'module1';
  } else {
    import { foo } from 'module2';
  }
  */

  console.log(_export.x, _export.y);

  // 目前阶段，通过 Babel 转码，CommonJS 模块的require命令和 ES6 模块的import命令，可以写在同一个模块里面，
  // 但是最好不要这样做，因为import在静态解析阶段执行，所以它是一个模块之中最早执行的。
  // 下面的代码可能不会得到预期结果
  // require('core-js/modules/es6.symbol');
  // require('core-js/modules/es6.promise');
  // import os from 'os';

  setTimeout(function () {
    console.log(_export.foo);
  }, 500);
});

//# sourceMappingURL=import.js.map
/**
 * 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。
 * 风格良好的代码，应该尽量消除魔术字符串，该由含义清晰的变量代替。
 */

/**
 * 常用的消除魔术字符串的方法，就是把它写成一个变量
 */
// var shapeType = {
//   triangle: 'Triangle'
// };

function getArea(shape, options) {
  var area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });

// 上面代码中，我们把“Triangle”写成shapeType对象的triangle属性，这样就消除了强耦合。

// 如果仔细分析，可以发现shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可。
// 因此，这里就很适合改用Symbol值。

const shapeType = {
  triangle: Symbol()
};
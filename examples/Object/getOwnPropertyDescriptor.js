{
  let obj = { foo: 123 };
  let foo = Object.getOwnPropertyDescriptor(obj, 'foo');
  console.log(foo);
}

{
  let enumerable = Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable;
  console.log(enumerable);
}

{
  let enumerable = Object.getOwnPropertyDescriptor([], 'length').enumerable;
  console.log(enumerable)
}

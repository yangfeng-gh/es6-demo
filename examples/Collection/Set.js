
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(`set中的元素自动去重: ${i}`);
}

console.log(`set取值：${s.values().next().value}`);
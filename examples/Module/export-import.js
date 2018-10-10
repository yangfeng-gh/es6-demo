export {firstName, lastName} from './profile';
// 相当于对外转发两个接口，在当前模块不能使用
// console.log(firstName, lastName);

// 接口改名
export {firstName as name} from './profile';

// 整体输出
export * from './export';

export {default} from './export-default';
// Only one default export allowed per module.
// export { firstName as default } from './profile'

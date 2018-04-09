// const / type 模式，允许我们以易于访问和可重构的方式，使用 ts 的字符串字面量类型
export const INCREMENT_VALUE = 'INCREMENT_VALUE'
export type INCREMENT_VALUE = typeof INCREMENT_VALUE

export const DECREMENT_VALUE = 'DECREMENT_VALUE'
export type DECREMENT_VALUE = typeof DECREMENT_VALUE

### Set

> 类似于数组，但是成员的值都是唯一的

+ 可以接受一个数组（或者具有iterable接口的其他数据结构）作为参数，用来初始化
+ size
+ add
+ delete
+ has
+ clear
+ keys
+ values
+ entries
+ forEach

### WeakSet

> 与Set类似，也是不重复的值的集合。但是它与Set有两个区别

+ 区别1： WeakSet的成员只能是对象

+ 区别2：
  + WeakSet中对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说如果其他对象都不在引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。
  + 这是因为垃圾回收机制根据对象的可达性（reachability）来判断回收，如果对象还能被访问到，垃圾回收机制就不会释放这块内存。结束使用该值之后。有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。
  + WeakSet里面的引用都不计入垃圾回收机制，所以就不存在这个问题。因此WeakSet适合临时存放一组对象，以及存放跟对象绑定的信息，只要这些对象在外部消失，它在WeakSet里面的引用就会消失。
  + 由于上面这个这些特点，WeakSet的成员是不适合引用的，因为它随时会消失，另外由于WeakSet内部有多少个成员取决于垃圾回收机制有没有运行，运行前后很有可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此WeakSet不可遍历。

  

+ 例

```javascript
const set = new Set()
const weakSet = new WeakSet()

function test() {
  const testObj = {
    wave: new Array(10000000).fill({})
  }
  weakSet.add(testObj)
  // set.add(testObj)
}
test()

console.log(process.memoryUsage())

setTimeout(() => {
  console.log(process.memoryUsage()) // 当使用WeakSet时内存被释放
}, 15000)
```





https://es6.ruanyifeng.com/#docs/set-map



```javascript
global.gc()
```

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
  console.log(process.memoryUsage())
}, 15000)
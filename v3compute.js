const compute = (array, M) => {
  let arr = [...array].reverse()
  let m = M
  let workingStack = []

  const solutions = []

  const s = x => x.reduce((a, b) => a + b)

  let currNr = arr.shift()
  while (currNr) {
    if (!workingStack.length && currNr <= m) {
      workingStack.push(currNr)
      currNr = arr.shift()
      continue
    }

    if (s(workingStack) + currNr <= m) {
      workingStack.push(currNr)
      currNr = arr.shift()
    } else {
      solutions.push([...workingStack])
      workingStack.pop()

      if (!workingStack.length) {
        workingStack = solutions.length
          ? solutions.reduce((a, b) => (s(b) > s(a) ? b : a))
          : []
        break
      }

      continue
    }

    if (s(workingStack) === m) {
      break
    }
  }

  return workingStack
}

module.exports = compute

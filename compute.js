const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = fileName => {
  const filename = path.join(__dirname, 'input', fileName)

  const [l1, l2] = fs
    .readFileSync(filename)
    .toString()
    .split(os.EOL)

  const create = (l1, l2) => {
    const [M, N] = l1.split(' ')
    const pizzaSizes = l2.split(' ').map(x => Number(x))
    const pizzaSizesObj = pizzaSizes.reduce((acc, val, i) => {
      if (acc[val]) {
        if (Array.isArray(acc[val])) {
          acc[val].push(i)
        } else {
          acc[val] = [acc[val], i]
        }

        return acc
      } else {
        return { ...acc, ...{ [val]: i } }
      }
    }, {})

    return {
      M: Number(M),
      N: Number(N),
      pizzaSizes,
      pizzaSizesObj,
    }
  }

  const obj = create(l1, l2)

  let tempM = obj.M

  const solution = []
  const leftovers = []
  let pizzas = obj.pizzaSizes

  while (tempM > 0) {
    if (!pizzas.length && !leftovers.length) break

    const pizza = pizzas.pop()

    if (tempM > pizza) {
      solution.push(pizza)
    } else {
      leftovers.push(pizza)
    }

    tempM -= pizza
  }

  const result = {
    nrOfPizzas: solution.length,
    pizzas: solution
      .map(x => {
        if (
          Array.isArray(obj.pizzaSizesObj[x]) &&
          obj.pizzaSizesObj[x].length
        ) {
          return obj.pizzaSizesObj[x].shift()
        }
        return obj.pizzaSizesObj[x]
      })
      .sort((a, b) => a - b),
  }

  const outFilename = `${path.parse(fileName).name}.out`
  const outFile = path.join(__dirname, 'output', outFilename)

  fs.writeFileSync(outFile, `${result.nrOfPizzas}${os.EOL}`, {
    flag: 'w+',
  })

  fs.appendFileSync(outFile, result.pizzas.join(' '), {
    flag: 'a+',
  })
}

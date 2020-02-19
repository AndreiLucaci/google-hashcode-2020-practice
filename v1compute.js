const compute = (arr, M) => {
  let tempM = M
  const solution = []
  let pizzas = [...arr]
  while (tempM > 0) {
    if (!pizzas.length) break
    const pizza = pizzas.pop()
    if (tempM > pizza) {
      solution.push(pizza)
    }
    tempM -= pizza
  }

  return solution
}

module.exports = compute

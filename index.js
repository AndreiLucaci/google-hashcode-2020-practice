const compute = require('./compute')

const files = [
  'a_example.in',
  'b_small.in',
  'c_medium.in',
  'd_quite_big.in',
  'e_also_big.in',
]

files.forEach(file => {
  compute(file)
})

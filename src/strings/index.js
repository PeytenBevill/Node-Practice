const split = (str, delim) => {
  // write code for strings.split
  return str.split("-")
}

const pairs = (str) => {
  // write code for strings.pairs
  const res = []

  for(let i = 0; i < str.length; i+=2){
    res.push(str.slice(i, i + 2))
  }
  return res
}

const reverse = (str) => {
  // write code for strings.reverse
  let string = ''
  for (let i = str.length - 1; i >= 0; i--){
    string += str[i]
  }
  return string
}

module.exports = {
  split,
  pairs,
  reverse
}
import path from 'path'

function test() {
  const _path = 'test'
  return path.relative(__dirname, _path)
}

console.log(test())

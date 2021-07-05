export default function(fn, duration = 100) {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.log('11111', ...args)
      fn(...args)
    }, duration)
  }
}
export default function(timestamp) {
  const newDate = new Date(+timestamp)
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
  const day = (newDate.getDate()).toString().padStart(2, '0')
  return `${newDate.getFullYear()}-${month}-${day}`
}

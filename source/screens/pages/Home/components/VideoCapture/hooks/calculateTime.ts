/** @format */

function calculateTime(timeInSeconds: number): String {
  const mins = Math.floor((timeInSeconds % 3600) / 60)
  const secs = Math.floor(timeInSeconds % 60)
  let time = ''

  time += `0${mins}:${secs < 10 ? '0' : ''}`
  time += `${secs}`

  return time
}

export default calculateTime

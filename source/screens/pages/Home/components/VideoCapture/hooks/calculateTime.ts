/** @format */

function calculateTime(timeInSeconds: number): String {
  var mins = Math.floor((timeInSeconds % 3600) / 60)
  var secs = Math.floor(timeInSeconds % 60)
  var time = ''

  time += '0' + mins + ':' + (secs < 10 ? '0' : '')
  time += '' + secs

  return time
}

export default calculateTime

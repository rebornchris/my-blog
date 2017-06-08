const frontFormatDate = function (t) {
  let date = new Date(t)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return `${year}-${month < 10 ? 0 : ''}${month}-${day < 10 ? 0 : ''}${day}`
}

const backFormatDate = function (t) {
  return new Date(t).getTime()
}

const timeFormatObj = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

const cnFormatEn = function (time) {
  let year = time.toString().split('-')[0]
  let month = time.toString().split('-')[1]
  let day = time.toString().split('-')[2]
  let en = timeFormatObj[month]
  return `${en} ${day},  ${year}`
}

export default{frontFormatDate, backFormatDate, cnFormatEn}

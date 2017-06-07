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

export default{frontFormatDate, backFormatDate}

/**
 * Get time and refactor the time format
 */
function getTime(){
  let date = {};
  let now = new Date();
  date.year = now.getFullYear();
  date.month = now.getMonth() + 1;
  date.day = now.getDate();
  date.hour = now.getHours();
  date.minute = now.getMinutes();
  date.second = now.getSeconds();

  for(let k of Object.keys(date)) {
    if (date[k] < 10) {
      date[k] = `0${date[k]}`
    }
  }

   return date;
}

/**
 * It provite a default time format:
 * 2019-08-19 10:23:40
 */
function defaultFormat() {
  let d = getTime()
  let f = `${d.year}-${d.month}-${d.day} ${d.hour}:${d.minute}:${d.second}`
  return f
}

module.exports = {
  defaultFormat
}
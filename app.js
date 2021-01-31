const schedule = require('node-schedule');

var date = new Date();
console.log(date);
// console.log(date.toLocaleString('tr-TR',{timeZone:'Europe/Istanbul'}))
const year = date.getFullYear();
const month = date.getMonth();
const dateCurrent= date.getDate();
const hour = date.getHours();
console.log(hour);

const minute = 10;
const second=0;
var rule = new schedule.RecurrenceRule();
rule.year=year;
rule.month=month;
rule.date=dateCurrent;
rule.hour=hour;
rule.minute=minute;
rule.second=second;
rule.tz="Europe/Istanbul"

console.log(rule);
var x = schedule.scheduleJob('test',rule,async()=>{
  console.log('scheduler has run');
  console.log(date)
})
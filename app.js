const schedule = require('node-schedule');

var timer1 = 0;
var timer2 = 0;

const rule = new schedule.RecurrenceRule();
rule.dayOfMonth=25;
// rule.hour=11;
// rule.minute=26
rule.tz= 'Europe/Istanbul'



var k = schedule.scheduleJob('deneme1','* * * * * *',()=>{
  //console.log(` timer2: ${timer2}`);
  timer2 +=1;
  if(timer2 === 40){
    schedule.cancelJob('deneme');
  }
})

const name = 'deneme';
//console.log(schedule.scheduledJobs);
const jobs = schedule.scheduledJobs;
const jobdDeneme = jobs['deneme12'];

var j = schedule.scheduleJob('deneme',rule,()=>{
  console.log(` timer1: ${timer1}`);
  timer1 +=1;
  j.cancel()
  console.log(jobs[name])
  
  if(timer1 === 20){
    schedule.cancelJob('deneme1');
    
    const x = schedule.scheduleJob('deneme1','* * * * * *',()=>{
      console.log(` new timer2: ${timer2}`);
      timer2 +=1;
      if(timer2 === 40){
        schedule.cancelJob('deneme');
      }
    })
  }
})

console.log(jobs[name])
try {
  schedule.cancelJob('deneme12');
} catch (error) {
  console.log(error)
}

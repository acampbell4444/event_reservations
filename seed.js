const {Event, TimeSlot, db} = require('./server/db/index')


Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}



const dates = []
var date = new Date(2017, 1, 23, 9, 0, 0)

for(var x = 0; x <=365; x++) {
  dates.push(date)
  date =new Date(date.addHours(24))
}

let timeSlots = []
let times = [900, 1000, 1100,1200,1300, 1400]
times.forEach(time=>timeSlots.push({startTime: time, availableSpots: 15}))


 db.sync({force:true})
 .then(()=>{
 	dates.forEach(date=>{
 		Event.create( {
    		'title': 'Charter-Boat #1',
    		'dayNum': date.getDate(),
    		'monthNum': date.getMonth(),
        'yearNum' : date.getFullYear()
  		})
      .then(event=>{
        timeSlots.forEach(timeSlot=>{
          TimeSlot.create(timeSlot)
          .then(timeSlot=>{
            timeSlot.setEventTime(event)
          })
        })
      })
  	})
  })
  .catch(function (err) {
  	console.error('There was totally a problem', err, err.stack);
  })


dates.map(d=>d.getMonth())  //month num 0-11
dates.map(d=>d.getDate())   //day num
dates.map(d=>d.getFullYear())   //year num
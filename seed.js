
const db = require('./server/db/_db')
const Event = require('./server/db/models/event')

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}


const dates = []
var date = new Date(2017, 1, 23, 9, 0, 0)

for(var x = 0; x <=365; x++) {
  if(x>0){date = new Date(date.addHours(16))}
  
  for(var i = 0 ; i <= 7; i++) {
    dates.push(date)
    date = new Date(date.addHours(1))
  }
}

 db.sync({force:true})
 .then(()=>{
 	dates.forEach(date=>{
 		Event.create( {
    		'title': '1  Hour Event',
    		'start': date,
    		'end': new Date(date).addHours(1)
  		})
  	})
  })
  .catch(function (err) {
  	console.error('There was totally a problem', err, err.stack);
  })



 // 	})
 // 	Event.create( {
 //    	'title': '1  Hour Event',
 //    	'start': new Date(2017, 1, 25, 10, 0, 0),
 //    	'end': new Date(2017, 1, 25, 11, 0, 0)
 //  	})
 // })

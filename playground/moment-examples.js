var moment = require('moment');

console.log(moment().format());

// Unix time stamp - seconds passed since the Unix Epic:
// .... January 1st, 1970 @ 12:00 am -> 0

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1480522546;
var currentMoment = moment.unix(timestamp); // convert back to moment object
console.log('Current moment', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 1978 @ 12:45 AM
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ HH:mm'));
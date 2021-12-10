const dayjs = require('dayjs');

const getDate = () => {
  console.log(dayjs().format('DD-MM-YYYY'));
}

getDate();
// 2021-02-08T03:08:30+05:30 - ISO 8601 standard
console.log(dayjs().format());
  
// 08 February 2021, 03:08:30 AM
console.log(dayjs().format('DD MMMM YYYY, hh:mm:ss A')); 
  
// 08-02-2021
console.log(dayjs().format('DD-MM-YYYY'));
  
// Monday
console.log(dayjs().format('dddd')); 
  
// Feb
console.log(dayjs().format('MMM'));
    
// Feb 8th,21 
console.log(dayjs().format("MMM D[th],YY")); 
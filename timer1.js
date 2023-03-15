const args = process.argv.slice(2);


const alarm = function(args) {

  for (let num of args){
  
    if(typeof parseInt(num) === NaN || parseInt(num) <= 0){
      continue;
    };
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(num) * 1000);
  };
  
};

alarm(args); 

// const alarm = function(args) {

//   for (let num of args){
  
//     if(typeof parseInt(num) === 'number' || parseInt(num) > 0){
//       setTimeout(() => {
//         process.stdout.write('\x07');
//       }, num * 1000);
//     };
//   };
  
// };

let convertNum = (entry) => {
    if (entry === 'quadrillion') {
        return 1000000000000000;
   };
    if (entry === 'trillion') {
        return 1000000000000;
   };
    if (entry === 'billion') {
        return 1000000000;
   };
    if (entry === 'million') {
        return 1000000;
   };

  
};

function addCommas(number) {
    console.log(number.toLocaleString());
};

console.log(addCommas(convertNum('million')));

console.log(addCommas(convertNum('billion')));

console.log(addCommas(convertNum('trillion')));

console.log(addCommas(convertNum('quadrillion')));




const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const result = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(result); 

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const last = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(last); 

const selectingDrivers= [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, callback) {
    return callback(drivers);
  };

  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 

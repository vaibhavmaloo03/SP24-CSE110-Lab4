let statistics = {
    redCars: 21, 
    bluecars: 45, 
    greencars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2
    };
    for (let prop in statistics) {
      if (prop[0] === 'r' || statistics[prop] % 2 !== 0) {
        console.log(statistics[prop]);
      }
    }
const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice
    this.dinosaurs = [];
  }

Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
  }

Park.prototype.removeDinosaur = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
  }

Park.prototype.mostAttractiveDinosaur = function(){
    let best = null;
    let value = this.dinosaurs[this.guestsAttractedPerDay];
    for (var i = 0; i < this.dinosaurs.length; i++) {
      let currentDinosaur = this.dinosaurs[i];
      if (best === null){
        value = currentDinosaur.guestsAttractedPerDay;
        best = currentDinosaur; 
      } if (currentDinosaur.guestsAttractedPerDay > value) {
        value = currentDinosaur.guestsAttractedPerDay;
        best = currentDinosaur; 
        } 
      }
      return best;
    }
  


Park.prototype.findAllOfSpecies = function(dinosaur){
  let speciesList = [];
  for (var i = 0; i < this.dinosaurs.length; i++) {
    let currentDinosaur = this.dinosaurs[i];
    if(currentDinosaur.species === dinosaur){
      speciesList.push(currentDinosaur);
    }
  }
  return(speciesList);
}

Park.prototype.visitorsPerDay = function(){
  let totalVisitors = 0;
  for (var i = 0; i < this.dinosaurs.length; i++) {
    let currentDinosaur = this.dinosaurs[i];
    totalVisitors = totalVisitors + currentDinosaur.guestsAttractedPerDay;   
  }
  return totalVisitors;
}

Park.prototype.visitorsPerYear = function(){
  let visitorsPerDay = this.visitorsPerDay();
  visitors = visitorsPerDay * 364;
  return visitors;
}

Park.prototype.yearlyRevenue = function(){
  let visitorsPerYear = this.visitorsPerYear();
  revenue = visitorsPerYear * this.ticketPrice;
  return revenue;
}

// Park.prototype.removeAllOfSpecies = function(dinosaur){
//   for (var i = 0; i < this.dinosaurs.length; i++) {
//     let currentDinosaur = this.dinosaurs[i];
//     if(currentDinosaur.species === dinosaur){
//       this.dinosaurs.splice(currentDinosaur, 1);
//     } 
//   }
//   return this.dinosaurs
// }


// Park.prototype.removeAllOfSpecies = function(dinosaur){
//   for (var i = 0; i < this.dinosaurs.length; i++) {
//     let currentDinosaur = this.dinosaurs[i];
//     if(currentDinosaur.species === dinosaur){
//       this.dinosaurs.splice(currentDinosaur, [i]);
//     }
//   }
//   return this.dinosaurs

// }
module.exports = Park;
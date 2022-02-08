const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park("DinoLand", 10);
    dino1 = new Dinosaur("T-Rex", "outhouse", 100);
    dino2 = new Dinosaur("Raptor", "goats", 150);
    dino3 = new Dinosaur("Spitter", "Dennis Nedry", 20);
    dino4 = new Dinosaur("Spitter", "Dennis Nedry", 30);
    dino5 = new Dinosaur("Brontosaurus", "grass", 20);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "DinoLand");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dino1)
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.removeDinosaur(dino1);
    const expected = [dino2];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    const expected = dino2;
    const actual = park.mostAttractiveDinosaur();
    assert.strictEqual(actual, expected)

  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    const expected = [dino3, dino4];
    const actual = park.findAllOfSpecies("Spitter");
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    actual = park.visitorsPerDay();
    assert.strictEqual(actual, 320);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    actual = park.visitorsPerYear();
    assert.strictEqual(actual, 116480);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.addDinosaur(dino5);
    actual = park.yearlyRevenue();
    assert.strictEqual(actual, 1164800);
  });

  // it('should be able to remove all dinosaurs', function(){
  //   park.addDinosaur(dino1);
  //   park.addDinosaur(dino2);
  //   park.addDinosaur(dino3);
  //   park.addDinosaur(dino4);
  //   park.addDinosaur(dino5);
  //   const expected = [dino1, dino2, dino5];
  //   const actual = park.removeAllOfSpecies("Spitter");
  //   assert.strictEqual(actual, expected);
  // });

});

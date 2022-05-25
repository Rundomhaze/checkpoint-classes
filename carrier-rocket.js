class CarrierRocket {
  constructor(stages) {
    this.stages = [...stages];
  }
  detachStage() {
    return this.stages.shift();
  }

};


module.exports = CarrierRocket;

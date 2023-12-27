const automobile = {
    fuelType: 'Petrol',
    drive() {
      console.log('The automobile is in motion.');
    },
  };
  
  const fourWheeler = Object.create(automobile, {
    wheels: { value: 4 },
    model: { value: 'Generic Four-Wheeler' },
  });
  
  console.log('Four-Wheeler Information:');
  console.log('Wheels:', fourWheeler.wheels);
  console.log('Fuel Type:', fourWheeler.fuelType);
  console.log('Model:', fourWheeler.model);
  fourWheeler.drive();

  function Automobile() {
    this.fuelType = 'Petrol';
  }
  
  Automobile.prototype.drive = function () {
    console.log('The automobile is in motion.');
  };
  
  function FourWheeler(model = 'Generic Four-Wheeler') {
    Automobile.call(this);
    Object.defineProperty(this, 'wheels', { value: 4 });
    Object.defineProperty(this, 'model', { value: model });
  }
  
  FourWheeler.prototype = Object.create(Automobile.prototype);
  
  console.log('Four-Wheeler Information:');
  const myFourWheeler = new FourWheeler('Tata XYZ');
  console.log('Wheels:', myFourWheeler.wheels);
  console.log('Fuel Type:', myFourWheeler.fuelType);
  console.log('Model:', myFourWheeler.model);
  myFourWheeler.drive();
  
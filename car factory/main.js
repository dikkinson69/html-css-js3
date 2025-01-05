'use strict';

class Car {
  constructor(model, color, carSpeed) {
    this.model = model;
    this.color = color;
    this.carSpeed = carSpeed;
    this.started = true;
  }

  startCar() {
    if (this.started) {
      console.log(`${this.model} is already started`);
    }else {
      this.started = false;
      console.log(`${this.model} has just started`);
    }
  }

  drive(speed) {
    if (!this.started) {
      console.log(`start the ${this.model} car!`);
    }else if (speed > this.carSpeed) {
      console.log(`${this.model} car goes faster than its ${this.carSpeed} kmh speed`);
    }else {
      console.log(`${this.model} car is driving at ${this.carSpeed}kmh speed`);
    }
  }
  
  carPaint(newColor) {
    this.color = newColor;
    console.log(`${this.color} is the new color og ${this.model} car`);
  }

  getInfo() {
    return `${this.model} - Color: ${this.color}, Max Speed: ${this.carSpeed} km/h.`;
  }
}

// const car1 = new Car('Yugo 45', 'red', 130);
// const car2 = new Car('fiat 500', 'white', 90);

// car1.startCar();
// car1.drive(100);
// car1.carPaint('blue');

// car2.startCar();
// car2.drive(100);
// car2.carPaint('orange');


//cars
const cars = [
  new Car ('Yugo 45', 'red', 130),
  new Car('fiat 500', 'white', 90),
  new Car ('perglica', 'govno boja', 50),
  new Car('renault twingo', 'black', 150),
  new Car('peugeout 206', 'blue', 160),
  new Car('lada niva', 'green', 140),
  new Car('dacia logan', 'gray', 145)
];

//dropdown menu
const carDropdown = document.getElementById('carDropdown');
cars.forEach(function(car, index) {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = car.model;
  carDropdown.appendChild(option);
});


//buttoni
const carInfo = document.querySelector('#carInfo');
let selectedCar = null;

carDropdown.addEventListener("change", (e) => {
  const carIndex = e.target.value;
  selectedCar = cars[carIndex];
  carInfo.textContent = selectedCar.getInfo();
});

document.getElementById("startCarBtn").addEventListener("click", () => {
  if (selectedCar) {
    carInfo.textContent = selectedCar.startCar();
  } else {
    alert('select a car first');
  }
});

document.getElementById("driveCarBtn").addEventListener("click", () => {
  if (selectedCar) {
    carInfo.textContent = selectedCar.drive(100); 
  } else {
    alert('select a car first');
  }
});

document.getElementById("paintCarBtn").addEventListener("click", () => {
  if (selectedCar) {
    const newColor = document.getElementById("paintColorInput").value;
    if (newColor) {
      carInfo.textContent = selectedCar.carPaint(newColor);
    } else {
      alert("you didnt enter a acolor");
    }
  } else {
    alert("you didnt select any of the cars");
  }
});
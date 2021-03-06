let flatType = document.querySelector('#flatType'),
  square = document.querySelector('#square'),
  squareRange = document.querySelector('#squareRange'),
  electricity = document.querySelector('#electricity'),
  fixType = document.querySelector('#fixType'),
  roof = document.querySelector('#roof'),
  toilet = document.querySelector('#toilet'),
  toiletSquare = document.querySelector('#toiletSquare'),
  toiletSquareLabel = document.querySelector('#toiletSquareLabel'),
  toiletSquareRange = document.querySelector('#toiletSquareRange'),
  floor = document.querySelector('#floor'),
  doors = document.querySelector('#doors'),
  enterDoor = document.querySelector('#enterDoor'),
  total = document.querySelector('#total'),
  burger = document.querySelector('.burger'),
  mobileClose = document.querySelector('.mobile__close'),
  mobileMenu = document.querySelector('.mobile-menu'),
  body = document.querySelector('body');

let result;
let render = function () {
  let a = flatType.value,
    s = squareRange.value,
    b = electricity.value,
    c = fixType.value,
    d = roof.value,
    e = floor.value,
    f = toilet.value,
    ts = toiletSquareRange.value,
    g = doors.value;

  square.value = `${squareRange.value} кв. м`;
  toiletSquare.value = `${toiletSquareRange.value} кв. м`;


  if (enterDoor.checked) {
    result = a * s + b * s + c * s + d * s + e * s + f * ts + g * 8500;
  } else {
    result = a * s + b * s + c * s + d * s + e * s + f * ts + g * 8500;
    let resultWithDoor;
    let enterDoorValue = +enterDoor.value;
    resultWithDoor = result * enterDoorValue;
    result += resultWithDoor;
  }
  total.innerHTML = result;
};
render();

toiletSquare.classList.add('hide');
toiletSquareLabel.classList.add('hide');
toiletSquareRange.classList.add('hide');

flatType.addEventListener('change', () => {
  render();
});
squareRange.addEventListener('change', () => {
  render();
});
electricity.addEventListener('change', () => {
  render();
});
fixType.addEventListener('change', () => {
  render();
});
roof.addEventListener('change', () => {
  render();
});
toilet.addEventListener('change', () => {
  if (toilet.value === '13000') {
    toiletSquare.classList.remove('hide');
    toiletSquareLabel.classList.remove('hide');
    toiletSquareRange.classList.remove('hide');

    toiletSquare.classList.add('show');
    toiletSquareLabel.classList.add('show');
    toiletSquareRange.classList.add('show');
  } else {
    toiletSquare.classList.remove('show');
    toiletSquareLabel.classList.remove('show');
    toiletSquareRange.classList.remove('show');

    toiletSquare.classList.add('hide');
    toiletSquareLabel.classList.add('hide');
    toiletSquareRange.classList.add('hide');

  }
  render();
});
toiletSquareRange.addEventListener('change', () => {
  render();
});
floor.addEventListener('change', () => {
  render();
});
doors.addEventListener('change', () => {
  render();
});
enterDoor.addEventListener('change', () => {
  render();
});


burger.addEventListener('click', () => {
  mobileMenu.classList.add('is__active');
  body.classList.add('lock');

});
mobileClose.addEventListener('click', () => {
  mobileMenu.classList.remove('is__active');
  body.classList.remove('lock');
});
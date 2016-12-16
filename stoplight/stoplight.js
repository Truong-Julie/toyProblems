// Array.from(document.getElementsByClassName('stoplight')).forEach((light) => {
//   light.addEventListener('click', (e) => {
//     e.target.classList.toggle('off');
//     console.log(e, 'e ');
//   });
// });

var stopLightContainer = document.getElementsByClassName('stoplight-container')[0];
// var redLight = document.getElementsByClassName('red')[0];
// var yellowLight = document.getElementsByClassName('yellow')[0];
// var greenLight = document.getElementsByClassName('green')[0];




Array.from(document.getElementsByClassName('stoplight')).forEach((light) => {
  light.addEventListener('click', (e) => {
    e.target.classList.remove('off');
    Array.from(e.target.parentNode.children).forEach((node) => {
      if (node !== e.target && node !== stopLightContainer) {
        node.classList.add('off');
      }
    });
  });
});

// redLight.addEventListener('click', (e) => { 
//   e.target.classList.remove('off');
//   Array.from(e.target.parentNode.children).forEach((node) => {
//     if (node !== e.target && node !== stopLightContainer) {
//       node.classList.add('off');
//     }
//   });
// });

// yellowLight.addEventListener('click', (e) => {
//   e.target.classList.remove('off');
//   redLight.classList.add('off');
//   greenLight.classList.add('off');
// });

// greenLight.addEventListener('click', (e) => {
//   e.target.classList.remove('off');
//   redLight.classList.add('off');
//   yellowLight.classList.add('off');
// });

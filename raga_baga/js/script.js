// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayTakeCare () {
   var message = "<h2>Take Care Raga Baga!!!</h2>";

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  }
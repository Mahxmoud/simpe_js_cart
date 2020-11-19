"use strict";

if (document.readyState == 'loading') {
  document.addEventListener('DOMcontentLoaded', ready);
} else {
  ready();
}

function ready() {
  var closeBtn = document.getElementsByClassName('close'); // console.log('click')

  for (i = 0; i < closeBtn.length; i++) {
    var xBtn = closeBtn[i]; // console.log('first loop')

    xBtn.addEventListener('click', removeItem);
  }

  var quantityinput = document.getElementsByClassName('quantity');

  for (i = 0; i < quantityinput.length; i++) {
    console.log('second loop');
    var input = quantityinput[i];
    input.addEventListener('change', quantityChanged);
  }
}

function removeItem(event) {
  var btnClicked = event.target;
  btnClicked.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  var input = event.target;

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 0;
  }

  updateTotal();
}

function updateTotal() {
  var itemCounter = document.getElementsByClassName('products')[0];
  var itemCard = itemCounter.getElementsByClassName('item');
  var total = 0;

  for (i = 0; i < itemCard.length; i++) {
    var currentItem = itemCard[i];
    var priceItem = currentItem.getElementsByClassName('price')[0];
    var quantityItem = currentItem.getElementsByClassName('quantity')[0];
    var price = parseFloat(priceItem.innerText.replace('$', ''));
    var quantity = parseFloat(quantityItem.value);
    total = total + price * quantity; // console.log(price , quantity)
  }

  document.getElementsByClassName('total')[0].innerText = '$' + total;
} // let carts = document.querySelectorAll('.item');
// console.log('hello');
// for (let i = 0; i < carts.length; i++) {
//     console.log('hello');
//     carts[i].addEventlistner('click', () => {
//         itemNumbers();
//     })
// }
// function itemNumbers() {
//     localStorage.setItem('itemNumvbers', 1);
// }
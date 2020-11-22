if (document.readyState == 'loading') {
    document.addEventListener('DOMcontentLoaded', ready)
}
else {
    ready()
}
function ready() {
    // close button
    var closeBtn = document.getElementsByClassName('close')
    for (i = 0; i < closeBtn.length; i++) {
        var xBtn = closeBtn[i]
        xBtn.addEventListener('click', removeItem)
    }
    // quantity buttons 
    var quantityinput = document.getElementsByClassName('quantity')
    for (i = 0; i < quantityinput.length; i++) {
        var input = quantityinput[i]
        input.addEventListener('change', quantityChanged)
    }
    // like button 
    var likeBtn = document.getElementsByClassName('like')
    for (i = 0; i < likeBtn.length; i++) {
        var itemLikeBtn = likeBtn[i]
        itemLikeBtn.addEventListener('click', itemLiked)
    }

}
function removeItem(event) {
    var btnClicked = event.target
    btnClicked.parentElement.remove()
    updateTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0
    }
    updateTotal()
}

function updateTotal() {
    var itemCounter = document.getElementsByClassName('products')[0]
    var itemCard = itemCounter.getElementsByClassName('item')
    var total = 0
    for (i = 0; i < itemCard.length; i++) {
        var currentItem = itemCard[i]
        var priceItem = currentItem.getElementsByClassName('price')[0]
        var quantityItem = currentItem.getElementsByClassName('quantity')[0]
        var price = parseFloat(priceItem.innerText.replace('$', ''))
        var quantity = parseFloat(quantityItem.value)
        total = total + (price * quantity)
        // console.log(price , quantity)
    }
    document.getElementsByClassName('total')[0].innerText = '$' + total
}

// like button

function itemLiked(event) {
    var itemLikeBtn = event.target
    console.log(itemLikeBtn.style.color)
    if (itemLikeBtn.style.color === "grey") {
        itemLikeBtn.style.color = "red"
    }
    else {
        itemLikeBtn.style.color = "grey"
    }
}
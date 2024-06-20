function updatePrice(selectId, priceId) {
    var select = document.getElementById(selectId);
    var price = document.getElementById(priceId);
    var selectedOption = select.options[select.selectedIndex];
    var selectedPrice = selectedOption.getAttribute('data-price');
    price.textContent = '$' + selectedPrice;
}
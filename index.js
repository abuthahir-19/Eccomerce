var count = 0;
var clicked = false;
var menuIconClicked = false;
var updated;

var x = document.getElementById ('quantity_value');
var badge = document.getElementById ('badge_value');
var plusButton = document.getElementById ('plus_btn');
var minusButton = document.getElementById ('minus_btn');

x.innerHTML = count;
badge.innerHTML = count;

function handleIncreament () {
    count += 1;
    updated = count;
    badge.innerHTML = count;
    x.innerHTML = count;
}

function handleDecreament () {
    if (count !== 0) count -= 1;
    badge.innerHTML = count;
    x.innerHTML = count;
}

var cartBox = document.getElementById('cart-list');

function displayDetails () {
    if (!clicked)
    cartBox.style.display = 'block';
    else cartBox.style.display = 'none';
    clicked = !clicked;
}


function toggleIcon () {
    document.getElementById('side-menu').style.transform = 'translate(0%)';
    document.getElementById ('links-container').style.transform = 'translate(0%)';
}

function closeSideMenu () {
    document.getElementById ('side-menu').style.transform = 'translate(-100%)';
    document.getElementById ('links-container').style.transform = 'translate(-120%)';
}

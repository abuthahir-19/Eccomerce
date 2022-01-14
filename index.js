var count = 0;
var clicked = false;
var menuIconClicked = false;
var updated = 0;

var x = document.getElementById ('quantity_value');
var badge = document.getElementById ('badge_value');
var plusButton = document.getElementById ('plus_btn');
var minusButton = document.getElementById ('minus_btn');
var ItemCount = document.getElementById ('number_of_quantity');
var emptyContent = document.getElementById ('item-count');
var totalPrice = document.getElementById ('total_price');

//cart box related variables
var checkoutBtn = document.getElementById ('checkout_button');
var cartBoxContent = document.getElementById ('cart-box');
var productPhoto = document.getElementById ('product_photo');
var itemDet = document.getElementById ('item-details');
var delIcon = document.getElementById ('delete_icon');
var whenEmpty = document.getElementById ('empty');

x.innerHTML = count;
badge.innerHTML = count;
if (count == 0) {
    badge.style.display = 'none';
    productPhoto.style.display = 'none';
    checkoutBtn.style.display = 'none';
    itemDet.style.display = 'none';
    delIcon.style.display = 'none';

    whenEmpty.innerHTML = 'Your cart is empty.';
    cartBoxContent.style.width = '100%';
    cartBoxContent.style.height = '100%';
}

var screen = window.matchMedia ("(max-width: 550px)");
if (screen.matches) {
    document.getElementById ('main_front_image').style.cursor = 'default';
}

function handleIncreament () {
    count += 1;
    updated += count;
    x.innerHTML = count;
}

function handleDecreament () {
    if (count !== 0) {
        count -= 1;
    }
    if (count == 0) {
        badge.style.display = 'none';
        x.innerHTML = 0;
    }
    updated += count;
    x.innerHTML = count;
}

var cartBox = document.getElementById('cart-list');

function displayCartDetails () {
    if (!clicked)
    cartBox.style.display = 'block';
    else {
        cartBox.style.display = 'none';
    }
    clicked = !clicked;
}

function deleteItems () {
    count = 0;
    updated = 0
    x.innerHTML = count;
    badge.innerHTML = count;
    badge.style.display = 'none';

    productPhoto.style.display = 'none';
    checkoutBtn.style.display = 'none';
    itemDet.style.display = 'none';
    delIcon.style.display = 'none';

    whenEmpty.innerHTML = 'Your cart is empty.';
    cartBoxContent.style.width = '100%';
    cartBoxContent.style.height = '100%';
}

function toggleIcon () {
    document.getElementById('side-menu').style.transform = 'translate(0%)';
    document.getElementById('close-icon').style.display= 'block';
    document.getElementById ('links-container').style.transform = 'translate(-20%)';
}

function closeSideMenu () {
    document.getElementById ('side-menu').style.transform = 'translate(-100%)';
    document.getElementById ('links-container').style.transform = 'translate(-120%)';
}

function addToCart () {
    if (count > 0) {
        cartBoxContent.style.height = '80%';
        badge.style.display = 'flex';
        badge.style.paddingTop = '2px';
        badge.innerHTML = count;
        ItemCount.innerHTML = count;

        let tot = String(125 * count);
        totalPrice.innerHTML = ' $' + tot.padEnd (tot.length + 3, '.00');

        productPhoto.style.display = 'block';
        checkoutBtn.style.display = 'block';
        itemDet.style.display = 'block';
        delIcon.style.display = 'block';
        whenEmpty.innerHTML = '';
    }
}

//image rendering section

var element = document.getElementById ('main_front_image');
var imageParent = document.getElementById ('main_image');

function renderAsMainImage (id, active) {
    var imgTag;
    if (!active) {
        imgTag = document.getElementById (id).getAttribute('src');
        imgTag = imgTag.slice (0, imgTag.indexOf('-thumbnail')) + '.jpg';
        element.setAttribute('src', imgTag);
    }
    else if (active) {
        imgTag = document.getElementById (id).getAttribute('src');
        imgTag = imgTag.slice (0, imgTag.indexOf('-thumbnail')) + '.jpg';
        imageParent.setAttribute ('src', imgTag);
    }
}

//breif description of image 
function displayImageDetails () {
    var screen = window.matchMedia ("(min-width: 1171px)");
    if (screen.matches)
    document.getElementById('image-wrapper').style.display = 'block';
}

function closeImageDetailsInfo() {
    document.getElementById('image-wrapper').style.display = 'none';
}

//Image sliding section code

var imageCount = 0;
var images = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg']

function showPrevImage (bool) {
    if(bool) {
        if (imageCount != 0) {
            imageCount -= 1;
            imageParent.setAttribute ('src', images[imageCount]);
        }
        else if (imageCount == 0) {
            imageParent.setAttribute ('src', images[imageCount]);
        }
    }
    else {
        if (imageCount != 0) {
            imageCount -= 1;
            element.setAttribute ('src', images[imageCount]);
        }
        else if (imageCount == 0) {
            element.setAttribute ('src', images[imageCount]);
        }
    }
}

function showNextImage (bool) {
    if (bool) {
        if (imageCount != images.length-1) {
            imageCount += 1;
            imageParent.setAttribute ('src', images[imageCount]);
        }
    }
    else {
        if (imageCount != images.length-1) {
            imageCount += 1;
            element.setAttribute ('src', images[imageCount]);
        }
    }
}
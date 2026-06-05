const wishlistButtons =
document.querySelectorAll('.wishlist');

wishlistButtons.forEach(button=>{

button.addEventListener('click',()=>{

if(button.classList.contains('active')){

button.classList.remove('active');
button.innerHTML = '♡';

}else{

button.classList.add('active');
button.innerHTML = '♥';

}

});

});
const wishlistButtons =
document.querySelectorAll('.wishlist');

const wishlistCount =
document.querySelector('.wishlist-count');

let wishlistNumber = 0;

wishlistButtons.forEach(button=>{

button.addEventListener('click',()=>{

if(button.classList.contains('active')){

button.classList.remove('active');
button.innerHTML='♡';

wishlistNumber--;

}else{

button.classList.add('active');
button.innerHTML='♥';

wishlistNumber++;

}

wishlistCount.innerHTML =
wishlistNumber;

});

});
// CART ANIMATION

const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');
const addButtons = document.querySelectorAll('.product-card button');

let cartItems = 0;

addButtons.forEach(button => {

button.addEventListener('click', function(e){

e.preventDefault();

const card = this.closest('.product-card');
const image = card.querySelector('img');

const flyingImage = image.cloneNode(true);

const rect = image.getBoundingClientRect();
const cartRect = cartIcon.getBoundingClientRect();

flyingImage.style.position = 'fixed';
flyingImage.style.left = rect.left + 'px';
flyingImage.style.top = rect.top + 'px';
flyingImage.style.width = rect.width + 'px';
flyingImage.style.height = rect.height + 'px';
flyingImage.style.objectFit = 'cover';
flyingImage.style.borderRadius = '20px';
flyingImage.style.zIndex = '99999';
flyingImage.style.transition =
'all 1s cubic-bezier(.2,.8,.2,1)';

document.body.appendChild(flyingImage);

setTimeout(() => {

flyingImage.style.left =
cartRect.left + 'px';

flyingImage.style.top =
cartRect.top + 'px';

flyingImage.style.width = '20px';
flyingImage.style.height = '20px';

flyingImage.style.opacity = '0.3';
flyingImage.style.transform =
'scale(.2) rotate(360deg)';

}, 10);

setTimeout(() => {

flyingImage.remove();

cartItems++;
cartCount.innerText = cartItems;

cartIcon.animate([
{ transform:'scale(1)' },
{ transform:'scale(1.3)' },
{ transform:'scale(1)' }
],{
duration:400
});

},1000);

});

});

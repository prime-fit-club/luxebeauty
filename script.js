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
// CART ANIMATION FIX

const cartIcon = document.querySelector('.cart-icon');
const cartCount = document.querySelector('.cart-count');

const addButtons =
document.querySelectorAll('.product-bottom button');

let cartItems = 0;

addButtons.forEach(button => {

button.addEventListener('click', (e) => {

e.preventDefault();
e.stopPropagation();

const card =
button.closest('.product-card');

const image =
card.querySelector('img');

const flyingImage =
image.cloneNode(true);

const imgRect =
image.getBoundingClientRect();

const cartRect =
cartIcon.getBoundingClientRect();

flyingImage.style.position = 'fixed';
flyingImage.style.left =
imgRect.left + 'px';

flyingImage.style.top =
imgRect.top + 'px';

flyingImage.style.width =
imgRect.width + 'px';

flyingImage.style.height =
imgRect.height + 'px';

flyingImage.style.objectFit = 'cover';
flyingImage.style.borderRadius = '20px';
flyingImage.style.zIndex = '999999';
flyingImage.style.pointerEvents = 'none';

flyingImage.style.transition =
'all 900ms cubic-bezier(.22,.61,.36,1)';

document.body.appendChild(flyingImage);

requestAnimationFrame(() => {

flyingImage.style.left =
cartRect.left + 'px';

flyingImage.style.top =
cartRect.top + 'px';

flyingImage.style.width = '18px';
flyingImage.style.height = '18px';
flyingImage.style.opacity = '.2';

flyingImage.style.transform =
'scale(.2) rotate(360deg)';

});

setTimeout(() => {

flyingImage.remove();

cartItems++;

cartCount.textContent =
cartItems;

cartIcon.animate([
{ transform:'scale(1)' },
{ transform:'scale(1.3)' },
{ transform:'scale(1)' }
],{
duration:350
});

}, 900);

});

});
// STICKY HEADER EFFECT

const navbar =
document.querySelector('.navbar');

window.addEventListener('scroll', () => {

if(window.scrollY > 50){

navbar.classList.add('scrolled');

}else{

navbar.classList.remove('scrolled');

}

});
/* PREMIUM SCROLL REVEAL */

const reveals =
document.querySelectorAll('.reveal');

function revealOnScroll(){

reveals.forEach((item)=>{

const revealTop =
item.getBoundingClientRect().top;

const windowHeight =
window.innerHeight;

if(revealTop < windowHeight - 100){

item.classList.add('active');

}else{

item.classList.remove('active');

}

});

}

window.addEventListener(
'scroll',
revealOnScroll
);

window.addEventListener(
'load',
revealOnScroll
);
/* PREMIUM DRAWER */

const wishlistIcon =
document.querySelector('.wishlist-icon');

const wishlistDrawer =
document.querySelector('.wishlist-drawer');

const cartDrawer =
document.querySelector('.cart-drawer');

const closeWishlist =
document.querySelector('.close-wishlist');

const closeCart =
document.querySelector('.close-cart');

wishlistIcon.addEventListener('click',()=>{

wishlistDrawer.classList.add('active');

});

cartIcon.addEventListener('click',()=>{

cartDrawer.classList.add('active');

});

closeWishlist.addEventListener('click',()=>{

wishlistDrawer.classList.remove('active');

});

closeCart.addEventListener('click',()=>{

cartDrawer.classList.remove('active');

});
// BACK TO TOP

const backToTop =
document.querySelector(
'#backToTop'
);

window.addEventListener(
'scroll',
()=>{

if(window.scrollY > 500){

backToTop.classList.add(
'show'
);

}else{

backToTop.classList.remove(
'show'
);

}

});

backToTop.addEventListener(
'click',
()=>{

window.scrollTo({
top:0,
behavior:'smooth'
});

});

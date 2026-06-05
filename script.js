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

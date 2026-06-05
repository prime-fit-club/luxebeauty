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

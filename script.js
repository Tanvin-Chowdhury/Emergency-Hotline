const heartCount = document.getElementById('heart-count');
const heartNational = document.getElementById('heart-icon-national');


document.getElementById('heart-icon-national').addEventListener('click', function(){
    heartNational.style.backgroundColor = 'red';
    console.log('clicked');
});
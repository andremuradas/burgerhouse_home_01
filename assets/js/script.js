let btnLeft = document.querySelector('#slideLeft');
let btnRigth = document.querySelector('#slideRight');
let slideContainer = document.querySelector('.slider_container');

btnLeft.addEventListener('click', slidePrevious);

btnRigth.addEventListener('click', slideFoward);

function slidePrevious()
{
    slideContainer.style.marginLeft = '-1920px';
}

function slideFoward()
{
    console.log("clicou direito");
}
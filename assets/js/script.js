let btnLeft = document.querySelector('#slideLeft');
let btnRigth = document.querySelector('#slideRight');
let slideContainer = document.querySelector('.slider_container');
let slideSize = document.querySelector('.slide').clientWidth;
let totalSlide = slideContainer.clientWidth / slideSize;
let slidePosition = 0;

btnLeft.addEventListener('click', slidePrevious);
btnRigth.addEventListener('click', slideFoward);

function checkCount()
{
    if(slidePosition == totalSlide)
    {
        slidePosition = 0;
    }
    else if(slidePosition < 0)
    {
        slidePosition = totalSlide - 1;
    }
    console.log(slidePosition);
}

function slidePrevious()
{
    slidePosition -= 1; 
    checkCount();
    slideContainer.style.marginLeft = (slidePosition * slideSize)+'px';
}

function slideFoward()
{
    slidePosition += 1; 
    slideContainer.style.marginLeft = -(slidePosition * slideSize)+'px';
    checkCount();
}
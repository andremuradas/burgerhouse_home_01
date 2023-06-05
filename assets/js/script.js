//Slide Show
let btnLeft = document.querySelector('#slideLeft');
let btnRigth = document.querySelector('#slideRight');
let slideContainer = document.querySelector('.slider_container');
let slideSize = document.querySelector('.slide').clientWidth;
let totalSlide = slideContainer.clientWidth / slideSize;
let slidePosition = 0;

btnLeft.addEventListener('click', slidePrevious);
btnRigth.addEventListener('click', slideFoward);

function slidePrevious()
{
    slidePosition -= 1; 
    checkCount();
}

function slideFoward()
{
    slidePosition += 1; 
    checkCount();
}


function checkCount()
{
    if(slidePosition === totalSlide)
    {
        slidePosition = 0;
    }
    else if(slidePosition < 0)
    {
        slidePosition = totalSlide - 1;
    }
    slideContainer.style.marginLeft = -(slidePosition * slideSize)+'px';
}





//MENU MOBILE

let btnMenuMobile = document.querySelector('.arrow_navigation');
let menuMobile = document.querySelector('.mobile_navigation');
let arrowBtnMobile = document.querySelector('.arrow_navigation i');

btnMenuMobile.addEventListener('click', menuMobileOpenClose);

function menuMobileOpenClose()
{
    if(menuMobile.computedStyleMap().get('transform')[0].y.value === -100)
    {
        
        btnMenuMobile.style.bottom = '0px';
        menuMobile.style.transform = 'translate(-50%, 0%)';
        arrowBtnMobile.classList.replace("fa-chevron-down", "fa-chevron-up");
        arrowBtnMobile.style.transform = 'translate(-50%, -135%)';
    }
    else
    {
        btnMenuMobile.style.bottom = '-9px';
        menuMobile.style.transform = 'translate(-50%, -100%)';
        arrowBtnMobile.classList.replace('fa-chevron-up', 'fa-chevron-down');
        arrowBtnMobile.style.transform = 'translate(-50%, -150%)';
    }
    
};

const tabs = document.querySelectorAll('.scroll-tab-container a');

const rightArrow = document.querySelector('.scroll-tab-container .right-arrow i');

const leftArrow = document.querySelector('.scroll-tab-container .left-arrow i');

const tabsList = document.querySelector('.scroll-tab-container ul');

const leftArrowContainer = document.querySelector('.scroll-tab-container .left-arrow');

const rightArrowContainer = document.querySelector('.scroll-tab-container .right-arrow');

const removeAllActiveClasses = () => {
    tabs.forEach(tab => {
        tab.classList.remove("tabactive");
    })
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        removeAllActiveClasses();
        tab.classList.add("tabactive");
    });
})

const manageIcons = () => {
    if(tabsList.scrollLeft >= 20){
        leftArrowContainer.classList.add("active-scroll");
    } else{
        leftArrowContainer.classList.remove("active-scroll");
    }

    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

    if(tabsList.scrollLeft >= maxScrollValue){
        rightArrowContainer.classList.remove("active-scroll");
    } else{
        rightArrowContainer.classList.add("active-scroll");
    }
}

rightArrow.addEventListener("click", () =>{
    manageIcons();
    tabsList.scrollLeft += 200;
});

leftArrow.addEventListener("click", () =>{
    manageIcons();
    tabsList.scrollLeft -= 200;
});


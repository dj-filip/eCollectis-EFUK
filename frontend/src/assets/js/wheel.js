const body = document.querySelector('body');
const menu = document.querySelector('section.menu-section .menu-wrap');

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

// disableScroll();

function enableScroll() {
    window.onscroll = function() {};
}

menu.addEventListener("mouseenter", function() {
    body.classList.add('overflow-hidden');
    console.log('tu je');
    isOnDiv=true;
});
menu.addEventListener("mouseout", function() {
    body.classList.remove('overflow-hidden');
    console.log('nije vise');
    isOnDiv=false;
});

const menuItems = document.querySelectorAll('li');
const servicesInfo = document.querySelectorAll('.service-info');
const mediaQuery = window.matchMedia( "(min-width: 2000px)" );
let firstPosition;  // above-top-three
let secondPosition; // above-top-two
let thirdPosition;  // above-top-one
let fourthPosition; // 1st in viewport
let fifthPosition;  // 2nd 
let centerPosition;  // 3rd, CENTER
let seventhPosition;  // 4th
let eighthPosition;  // 5th
let ninthPosition;  // bellow-bottom-one
let tenthPosition;  // bellow-bottom-two
let eleventhPosition; // bellow-bottom-three
let bellowBottomPosition;   
let aboveTopPosition;
let nextPosition;
if (mediaQuery.matches) {
    sixthPosition = 410;
    fourthPosition = 615;
    eighthPosition = 820;
    bellowBottomPosition = 1025;
    nextPosition = 205;
}
else {
    firstPosition = -540;
    secondPosition = -360;
    thirdPosition = -180;
    fourthPosition = 0; // 1st in viewport
    fifthPosition = 180;
    centerPosition = 360; // CENTER
    seventhPosition = 540;
    eighthPosition = 720;  // 5th in viewport
    ninthPosition = 900;
    tenthPosition = 1080; 
    eleventhPosition = 1260;
    nextPosition = 180;
}
let currentPosition;
let menuItemActiveIcon;
let iconSrc;
let topEnd;
let bottomEnd;

window.onload = () => {
    menuItems.forEach(menuItem => {
        if (parseInt(window.getComputedStyle(menuItem).top) == centerPosition) {
            // menuItemActiveIcon = menuItem.querySelector('img');
            // menuItemActiveIcon.classList.add('menu-item-active-icon');
            // iconWhiteSrc = menuItemActiveIcon.src.replace('blue', 'white');
            // menuItemActiveIcon.src = iconWhiteSrc;
        }
    });
}




const wheelScroll = function (event) {
    // SCROLL UP
    if (event.deltaY < 0) {
        menuItems.forEach(menuItem => {
            menuItem.classList.add('fade-out');
            setTimeout(function() {
                if (menuItem.classList.contains('hidden')) {
                    menuItem.classList.remove('hidden');
                }
                className = menuItem.className.split(' ')[0];
                classLength = className.length;
                toSlice = classLength == 10 ? -1 : -2;
                classNumber = className.slice(toSlice);
                newPositionNumber = (+ classNumber + 1);
                newClass = className.slice(0, toSlice) + newPositionNumber;
                menuItem.className = "";
                menuItem.classList.add(newClass);
                if (newPositionNumber < 1 || newPositionNumber > 5) {
                    menuItem.classList.add('hidden');
                }
            }, 500);

            // currentPosition = parseInt(window.getComputedStyle(menuItem).top);
            // menuItem.style.top = (currentPosition + nextPosition) + 'px';
            // if (parseInt(window.getComputedStyle(menuItem).top) == secondPosition) {
            //     menuItem.classList.remove('first-menu-item');
            //     menuItem.classList.add('second-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == thirdPosition) {
            //     menuItem.classList.remove('second-menu-item');
            //     menuItem.classList.add('third-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == 0) {
            //     menuItem.classList.remove('third-menu-item');
            //     menuItem.classList.add('fourth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == fifthPosition) {
            //     menuItem.classList.remove('fourth-menu-item');
            //     menuItem.classList.add('fifth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == sixthPosition) {
            //     menuItem.classList.remove('fifth-menu-item');
            //     menuItem.classList.add('sixth-menu-item');
            //     menuItemActiveIcon = menuItem.querySelector('img');
            //     menuItemActiveIcon.classList.add('menu-item-active-icon');
            //     iconWhiteSrc = menuItemActiveIcon.src.replace('blue', 'white');
            //     menuItemActiveIcon.src = iconWhiteSrc;
                
            //     servicesInfo.forEach(serviceInfo => {
            //         serviceInfo.classList.remove('service-info-visible');
            //         if (menuItem.id.slice(0, -5) == serviceInfo.id) {
            //             serviceInfo.classList.add('service-info-visible');
            //         }  
            //     });

            //     if (menuItem.id == 'is-dp-icon') {
            //         window.removeEventListener('wheel', wheelScroll);
            //         topEnd = true;
            //     }
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == seventhPosition) {
            //     menuItem.classList.remove('sixth-menu-item');
            //     menuItem.classList.add('seventh-menu-item');
            //     menuItemActiveIcon = menuItem.querySelector('img');
            //     menuItemActiveIcon.classList.remove('menu-item-active-icon');
            //     iconWhiteSrc = menuItemActiveIcon.src.replace('white', 'blue');
            //     menuItemActiveIcon.src = iconWhiteSrc;
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == eighthPosition) {
            //     menuItem.classList.remove('seventh-menu-item');
            //     menuItem.classList.add('eighth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == ninthPosition) {
            //     menuItem.classList.remove('eighth-menu-item');
            //     menuItem.classList.add('ninth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == tenthPosition) {
            //     menuItem.classList.remove('ninth-menu-item');
            //     menuItem.classList.add('tenth-item');
            // }

        });
    // SCROLL DOWN
    }  else if (event.deltaY > 0) {
        menuItems.forEach(menuItem => {
            menuItem.classList.add('fade-out');
            setTimeout(function() {
                if (menuItem.classList.contains('hidden')) {
                    menuItem.classList.remove('hidden');
                }
                className = menuItem.className.split(' ')[0];
                classLength = className.length;
                toSlice = classLength == 10 ? -1 : -2;
                classNumber = className.slice(toSlice);
                newPositionNumber = (+ classNumber - 1);
                newClass = className.slice(0, toSlice) + newPositionNumber;
                menuItem.className = "";
                menuItem.classList.add(newClass);
                if (newPositionNumber < 1 || newPositionNumber > 5) {
                    menuItem.classList.add('hidden');
                }
            }, 500);

            // if (parseInt(window.getComputedStyle(menuItem).top) == firstPosition) {
            //     menuItem.classList.remove('second-menu-item');
            //     menuItem.classList.add('first-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == secondPosition) {
            //     menuItem.classList.remove('third-menu-item');
            //     menuItem.classList.add('second-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == thirdPosition) {
            //     menuItem.classList.remove('fourth-menu-item');
            //     menuItem.classList.add('third-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == fourthPosition) {
            //     menuItem.classList.remove('fifth-menu-item');
            //     menuItem.classList.add('fourth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == fifthPosition) {
            //     menuItem.classList.remove('sixth-menu-item');
            //     menuItem.classList.add('fifth-menu-item');
            //     menuItemActiveIcon = menuItem.querySelector('img');
            //     menuItemActiveIcon.classList.remove('menu-item-active-icon');
            //     iconWhiteSrc = menuItemActiveIcon.src.replace('white', 'blue');
            //     menuItemActiveIcon.src = iconWhiteSrc;
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == sixthPosition) {
            //     menuItem.classList.remove('seventh-menu-item');
            //     menuItem.classList.add('sixth-menu-item');
            //     menuItemActiveIcon = menuItem.querySelector('img');
            //     menuItemActiveIcon.classList.add('menu-item-active-icon');
            //     iconWhiteSrc = menuItemActiveIcon.src.replace('blue', 'white');
            //     menuItemActiveIcon.src = iconWhiteSrc;
                
            //     servicesInfo.forEach(serviceInfo => {
            //         serviceInfo.classList.remove('service-info-visible');
            //         if (menuItem.id.slice(0, -5) == serviceInfo.id) {
            //             serviceInfo.classList.add('service-info-visible');
            //         }  
            //     });

            //     if (menuItem.id == 'bs-dms-icon') {
            //         window.removeEventListener('wheel', wheelScroll);
            //         bottomEnd = true;
            //     }
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == seventhPosition) {
            //     menuItem.classList.remove('eighth-menu-item');
            //     menuItem.classList.add('seventh-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == eighthPosition) {
            //     menuItem.classList.remove('ninth-menu-item');
            //     menuItem.classList.add('eighth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == ninthPosition) {
            //     menuItem.classList.remove('tenth-menu-item');
            //     menuItem.classList.add('ninth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == tenthPosition) {
            //     menuItem.classList.remove('eleventh');
            //     menuItem.classList.add('tenth-menu-item');
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == 900) {
            //     menuItem.style.left = 150 + 'px';
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == 1080) {
            //     menuItem.style.left = 125 + 'px';
            // }
            // if (parseInt(window.getComputedStyle(menuItem).top) == 1260) {
            //     menuItem.style.left = 90 + 'px';
            // }
        });
    }
}

window.addEventListener('wheel', function(event) {
    if (topEnd == true) {
        if (event.deltaY > 0) {
            window.addEventListener('wheel', wheelScroll);
            topEnd = false;
        }
    }

    if (bottomEnd == true) {
        if (event.deltaY < 0) {
            window.addEventListener('wheel', wheelScroll);
            bottomEnd = false;
        }
    }
});

window.addEventListener('wheel', wheelScroll);
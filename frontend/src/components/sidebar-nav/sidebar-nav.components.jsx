import { useState, useEffect, useRef } from "react";

import {useNavigate } from 'react-router-dom';


// assets
import CategorySearchIcon from 'assets/assets/icons/category-search.svg';
import RiskRecordsIcon from 'assets/assets/icons/risk-records.svg';
import IrregularityRecordsIcon from 'assets/assets/icons/irregularity-records.svg';
import GfukIcon from 'assets/assets/icons/gfuk.svg';
import HarmonizationIcon from 'assets/assets/icons/harmonization.svg';
import IndexOfProcessesIcon from 'assets/assets/icons/index-of-processes.svg';
import RiskStrategyIcon from 'assets/assets/icons/risk-strategy.svg';





const SidebarNav = () => {

    const navigation = useNavigate();

    const [controlCounter, setControlCounter] = useState(1);
    const [counter, setCounter] = useState(1);
    const [scroll, setScroll] = useState();
    const [bottomEnd, setBottomEnd] = useState(false);
    const [topEnd, setTopEnd] = useState(false);
    
    const menuItems = [
        {
            title: 'centralna-jedinica-za-harmonizaciju',
            startPos: 0,
            icon: HarmonizationIcon
        },
        {
            title: 'gfuk-obrazac',
            startPos: 1,
            icon: GfukIcon
        },
        {
            title: 'glavna',
            startPos: 2,
            icon: CategorySearchIcon
        },
        {
            title: 'registar-rizika',
            startPos: 3,
            icon: RiskRecordsIcon
        },
        {
            title: 'registar-nepravilnosti',
            startPos: 4,
            icon: IrregularityRecordsIcon
        },
        {
            title: 'popis-procesa',
            startPos: 5,
            icon: IndexOfProcessesIcon
        },
        {
            title: 'strategija-upravljanja-rizicima',
            startPos: 6,
            icon: RiskStrategyIcon
        }
    ];

    const menu = useRef();
    const menuItemsRef = useRef([]);
    menuItemsRef.current = [];


    const addToMenuItems = (el) => {
        if(el && !menuItemsRef.current.includes(el)) {
            menuItemsRef.current.push(el);
        }
    }


    useEffect(() => {

        const menuIn = () => {
            disableScroll();
            setScroll(true);
        }
    
        const menuOut = () => {
            enableScroll();
            setScroll(false);
        }


        const wheelScroll = function (event) {

            // SCROLL UP
            if (event.deltaY < 0) {
                if (bottomEnd === true) {
                    setBottomEnd(false);
                }
                if (!topEnd === true) {
                    setCounter(counter + 1);
                }

                menuItemsRef.current.forEach(menuItem => {
                    if (menuItem.getAttribute('position') == 3) {
                        navigation("/fuk/" + menuItem.getAttribute('id') + "/");
                    }

                    if (menuItem.getAttribute('id') == 'centralna-jedinica-za-harmonizaciju' && menuItem.getAttribute('position') == 3) {
                        setTopEnd(true);
                        console.log('trojka');
                    }
                });
                // menuItems.forEach(menuItem => {
                //     menuItem.classList.add('fade-out');
                //     setTimeout(function() {
                //         if (menuItem.classList.contains('hidden')) {
                //             menuItem.classList.remove('hidden');
                //         }
                //         className = menuItem.className.split(' ')[0];
                //         classLength = className.length;
                //         toSlice = classLength == 10 ? -1 : -2;
                //         classNumber = className.slice(toSlice);
                //         newPositionNumber = (+ classNumber + 1);
                //         newClass = className.slice(0, toSlice) + newPositionNumber;
                //         menuItem.className = "";
                //         menuItem.classList.add(newClass);
                //         if (newPositionNumber < 1 || newPositionNumber > 5) {
                //             menuItem.classList.add('hidden');
                //         }
                //     }, 500);
                // });
            // // SCROLL DOWN
            }  else if (event.deltaY > 0) {
                if (topEnd === true) {
                    setTopEnd(false);
                }
                if (!bottomEnd === true) {
                    setCounter(counter - 1);
                }
                menuItemsRef.current.forEach(menuItem => {
                    if (menuItem.getAttribute('position') == 3) {
                        navigation("/fuk/" + menuItem.getAttribute('id') + "/");
                    } else {
                        
                    }

                    if (menuItem.getAttribute('id') == 'strategija-upravljanja-rizicima' && menuItem.getAttribute('position') == 3) {
                        setBottomEnd(true);
                    }
                });

                
    
    
                // menuItems.forEach(menuItem => {
                //     menuItem.classList.add('fade-out');
                //     setTimeout(function() {
                //         if (menuItem.classList.contains('hidden')) {
                //             menuItem.classList.remove('hidden');
                //         }
                //         className = menuItem.className.split(' ')[0];
                //         classLength = className.length;
                //         toSlice = classLength == 10 ? -1 : -2;
                //         classNumber = className.slice(toSlice);
                //         newPositionNumber = (+ classNumber - 1);
                //         newClass = className.slice(0, toSlice) + newPositionNumber;
                //         menuItem.className = "";
                //         menuItem.classList.add(newClass);
                //         if (newPositionNumber < 1 || newPositionNumber > 5) {
                //             menuItem.classList.add('hidden');
                //         }
                //     }, 500);
                // });
            }

        }
       
        if (scroll === true) {
            window.addEventListener('wheel', wheelScroll);
        }

        menu.current.addEventListener("mouseenter", menuIn);
        menu.current.addEventListener("mouseleave", menuOut);




        return () => window.removeEventListener('wheel', wheelScroll);  

    }, [ bottomEnd, topEnd, counter, scroll]);







    // useEffect (() => {
    //     window.addEventListener('wheel', function(event) {
    //         if (topEnd == true) {
    //             if (event.deltaY > 0) {
    //                 window.addEventListener('wheel', wheelScroll);
    //                 topEnd = false;
    //             }
    //         }
        
    //         if (bottomEnd == true) {
    //             if (event.deltaY < 0) {
    //                 window.addEventListener('wheel', wheelScroll);
    //                 bottomEnd = false;
    //             }
    //         }
    //     });
    // });




    function disableScroll() {
        // Get the current page scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
    

    
    function enableScroll() {
        window.onscroll = function() {};
    }




  
return (
<section class="menu-section">
    <div class="menu-wrap" ref={menu}>
    </div>
    <nav>
        <ul>
            {
                menuItems.map(({title, startPos, icon}) => {
                    return (
                        <li id={title} class={`menu-item${startPos + counter}`} position={startPos + counter} ref={addToMenuItems}><img src={icon}/></li>
                    )
                })
            }
            {/* <li id="category-search" class={`menu-item${3 + counter}`} position={3 + counter} ref={listItem1}><img src={CategorySearchIcon}/></li>
            <li id="registar-rizika" class={`menu-item${4+counter}`} position={4 + counter} ref={listItem1}><img src={RegistarRizikaIcon}/></li> */}
            {/* <!-- <li id="is-le-icon" class="menu-item-2 second-menu-item"><img src="assets/icons/is-ee-icon-blue.svg" class="is-ee-icon"></li>
            <li id="is-sec-icon" class="menu-item-3 third-menu-item"><img src="assets/icons/is-ee-icon-blue.svg" class="is-ee-icon"></li>
            <li id="is-ts-icon" class="menu-item-4 fourth-menu-item"><img src="assets/icons/is-ts-icon-blue.svg" class="is-ts-icon"></li>
            <li id="is-ee-icon" class="menu-item-5 fifth-menu-item"><img src="assets/icons/is-ee-icon-blue.svg" class="is-ee-icon"></li>
            <li id="home-icon" class="menu-item-6 sixth-menu-item"><img src="assets/icons/home-icon-blue.svg" class="home-icon"></li>
            <li id="bs-das-icon" class="menu-item-7 seventh-menu-item"><img src="assets/icons/bs-das-icon-blue.svg" class="bs-das-icon"></li>
            <li id="bs-ctt-icon" class="menu-item-8 eighth-menu-item"><img src="assets/icons/bs-ctt-icon-blue.svg" class="bs-ctt-icon"></li>
            <li id="bs-fuk-icon" class="menu-item-9 ninth-menu-item"><img src="assets/icons/bs-fuk-icon-blue.svg" class="bs-fuk-icon"></li>
            <li id="bs-csd-icon" class="menu-item-10 tenth-menu-item"><img src="assets/icons/bs-csd-icon-blue.svg"  class="bs-csd-icon"></li>
            <li id="bs-dms-icon" class="menu-item-11 eleventh-menu-item"><img src="assets/icons/is-ee-icon-blue.svg" class="is-ee-icon"></li> --> */}
        </ul>
    </nav>
    </section>
)
}

export default SidebarNav
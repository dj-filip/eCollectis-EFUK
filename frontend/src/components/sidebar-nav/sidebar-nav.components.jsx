import { useState, useEffect, useRef } from "react";

import { useNavigate } from 'react-router-dom';


// assets
import CategorySearchIcon from 'assets/icons/category-search.svg';
import RiskRecordsIcon from 'assets/icons/risk-records.svg';
import IrregularityRecordsIcon from 'assets/icons/irregularity-records.svg';
import GfukIcon from 'assets/icons/gfuk.svg';
import HarmonizationIcon from 'assets/icons/harmonization.svg';
import IndexOfProcessesIcon from 'assets/icons/index-of-processes.svg';
import RiskStrategyIcon from 'assets/icons/risk-strategy.svg';



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
    if (el && !menuItemsRef.current.includes(el)) {
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
          }
        });

      // SCROLL DOWN
      } else if (event.deltaY > 0) {
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
      }
    }

    if (scroll === true) {
      window.addEventListener('wheel', wheelScroll);
    }

    menu.current.addEventListener("mouseenter", menuIn);
    menu.current.addEventListener("mouseleave", menuOut);

    return () => window.removeEventListener('wheel', wheelScroll);

  }, [bottomEnd, topEnd, counter, scroll]);



  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }


  function enableScroll() {
    window.onscroll = function () { };
  }


  return (
    <section class="menu-section">
      <div class="menu-wrap" ref={menu}>
      </div>
      <nav>
        <ul>
          {
            menuItems.map(({ title, startPos, icon }) => {
              return (
                <li id={title} class={`menu-item${startPos + counter}`} position={startPos + counter} ref={addToMenuItems}><img src={icon} /></li>
              )
            })
          }
        </ul>
      </nav>
    </section>
  )
}

export default SidebarNav
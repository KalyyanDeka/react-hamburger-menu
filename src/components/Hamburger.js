import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom"
import gsap from "gsap";

const Hamburger = ({state}) => {

  // vars for our animated dom nodes
  let menu = useRef(null)
  let revealMenu = useRef(null)
  let revealMenuBackground = useRef(null)
  let cityBackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let info = useRef(null)

  useEffect(() => {
    if(state.clicked === false) {
      // Close our Menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07
        }
      })
      gsap.to(menu, {
        duration: 1,
        css: {display: "none"}
      })
    } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
      // Open our menu
      gsap.to(menu, {
        duration: 0,
        css: {display: "block"}
      })
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu)
      fadeInUp(info)
    }  
  }, [state] ) 

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        // amount: 0.1
      }
    })
  }

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: .2,
      opacity: 0,
      ease: 'power3.inOut'
    })
  }

  return <div ref={el => (menu = el)} className='hamburger-menu'>
    <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color">
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div className="menu-city-background">

        </div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li><Link ref={el => (line1 = el)} to="/opportunities">Opportunities</Link></li>
                
                  <li><Link ref={el => (line2 = el)} to="/solutions">Solutions</Link></li>
                
                  <li><Link ref={el => (line3 = el)} to="/contact-us">Contact us</Link></li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className="info">
                <h1>Our Promises</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known,
                   is dummy text used in laying out print, graphic or
                   web designs. The passage is attributed to an unknown 
                   typesetter </p>
              </div>
              <div className="locations">
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>Neywork</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Hamburger;

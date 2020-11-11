import React, {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom"
import Hamburger from "./Hamburger"

const Header = ({ history }) => {

  // state for menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  })

  // state for siabled button
  const [disabled, setDisabled] = useState(false)

  // useEffect for page changes
  useEffect(() => {
    //listen for page changes
    history.listen(() => {
      setState({clicked: false, menuName: "Menu"})
    })
    
  }, )

  const handleManu = () => {
    disabledMenu();
    if(state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      })
    }
  }

  // Determine if our menu should be disabled
  const disabledMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false)
    }, 1200);
  }

  return <header>
    <div className="container">
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">HAMBRG</Link>
          </div>
          <div className="menu">
            <button disabled={disabled} onClick={handleManu}>
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
    <Hamburger state={state} />
  </header>;
};

export default withRouter(Header);

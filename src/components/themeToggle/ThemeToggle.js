import React, { useState }from 'react';
import { connect } from 'react-redux';
import { BrightnessHigh, Moon } from 'react-bootstrap-icons';

import './ThemeToggle.css'

export const ThemeToggle = (props) => {
  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? "theme__container-light" : "theme__container-dark"}>
      <button onClick={() => setTheme(true)} className={theme ? "lightTheme__sun" : "darkTheme__sun"}>
        <BrightnessHigh size={18} color={'#fff'}/>
      </button>
      <button onClick={() => setTheme(false)} className={theme ? "lightTheme__moon" : "darkTheme__moon"}>
        <Moon size={18} color={"#0061FE"}/>
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle)

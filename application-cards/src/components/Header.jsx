import React from "react";
import PropTypes from 'prop-types'

function Header({ text, bgColor,textColor }) {

  const headerStyles ={
    backgroundColor: bgColor,
    color:textColor
  }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
// these will be used automatically if no props passed into <Header/>
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'black',
  textColor:'#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor : PropTypes.string,
  textColor : PropTypes.string
}

export default Header;



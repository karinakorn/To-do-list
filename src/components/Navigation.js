import React from 'react';

function Navigation(props) {
  return (

        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            {props.titulo}
          </a>
        </nav>

  );
}
export default Navigation;
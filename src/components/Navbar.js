import React from 'react';
import { NavLink } from 'react-router-dom';

// const link = { width: '100px', padding: '12px', margin: '0 6px 6px', background: 'blue', textDecoration: 'none', color: 'white', }
//
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/api/entries"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       style={link}
//       activeStyle={{ /* add prop for activeStyle */
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//   </div>;

  const Navbar = () =>  {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li><NavLink to="/api/entries">Home</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;

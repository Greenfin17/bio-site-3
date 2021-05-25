import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { signOutUser } from '../helpers/auth';

const NavBar = ({
  isAdmin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  const handleClick = () => {
    history.push('#about-me-heading');
  };

  const authenticated = () => (
    <>
      <NavItem>
        <Link className='nav-link' to='/add-project'>Add Project</Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/edit-projects'>Edit Projects</Link>
      </NavItem>
    </>
  );
  return (
    <div>
      <Navbar color='black' light expand='md'>
        <Link className='navbar-brand' to='/'>John Maple</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse className='bio-nav-collapse' isOpen={isOpen} navbar>
          <Nav className='mr-auto bio-ul' navbar>
            <NavItem>
              <Link className='nav-link' to='/#about-heading'
                onClick={handleClick} >About Me</Link>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href='/#technologies-heading'>Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' href='/#projects-heading'>Projects</NavLink>
            </NavItem>
            { isAdmin && authenticated() }
            {
              isAdmin && <NavItem>
                {
                    <Button color='danger' onClick={signOutUser}>Log Out</Button>
                }
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  isAdmin: PropTypes.bool,
};

export default NavBar;

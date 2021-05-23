import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button
} from 'reactstrap';
import { signOutUser } from '../helpers/auth';

const NavBar = ({
  isAdmin,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
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
              <Link className='nav-link' to='/'>About Me</Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/'>Technologies</Link>
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

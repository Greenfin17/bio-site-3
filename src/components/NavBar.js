import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
        <Link className='nav-link' to='/add-tech'>Add Tech</Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/edit-tech'>Edit Tech</Link>
      </NavItem>
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
              <HashLink className='nav-link'
                smooth to='/#about-heading'
                >About Me</HashLink>
            </NavItem>
            <NavItem>
              <HashLink className='nav-link'
                smooth to='/#technologies-heading'>Technologies</HashLink>
            </NavItem>
            <NavItem>
              <HashLink className='nav-link'
                smooth to='/#projects-heading'>Projects</HashLink>
            </NavItem>
            <NavItem>
              <Link className='nav-link'
                to='/contact'>Contact</Link>
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

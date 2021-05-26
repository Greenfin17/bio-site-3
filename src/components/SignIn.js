// SignIn.js

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button
} from 'reactstrap';
import styled from 'styled-components';
import { signInUser } from '../helpers/auth';

const SignInButton = styled(Button)`
  margin: 5px auto;
  display: block;
`;

const SignIn = ({
  isAdmin
}) => (
  <>
    { !isAdmin && <SignInButton color='info' onClick={signInUser}>Sign In</SignInButton>
    }
  </>
);

SignIn.propTypes = {
  isAdmin: PropTypes.bool
};

export default SignIn;

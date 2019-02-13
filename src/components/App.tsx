import { Box, Button, Image } from 'grommet';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../assets/logo.svg';
import './App.css';
import AppWrapper from './AppWrapper';
import Search from './Search';

const logoAnimation = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(1.2);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const Logo = styled.img`
  animation: ${logoAnimation} infinite 4s linear;
  mix-blend-mode: exclusion;
  width: 200px;
  margin-bottom: 1rem;
`;

const Page = (props: any) => (
  <Box
    align="center"
    justify="center"
    height="100vh"
    as="main"
    {...props}
  >
    {props.children}
  </Box>
);

const goToGithub = () => {
  location.href = 'https://github.com/SeedyROM/typescript-react-mobx-grommet';
};

export default () => (
  <AppWrapper>
    <Page background="neutral-2">
      <Logo src={logo} />
      <Search />
      <Button
        label="Typescript, React, Grommet and MobX"
        primary={true}
        onClick={goToGithub}
      />
    </Page>
  </AppWrapper>
);

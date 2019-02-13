import * as React from 'react';

import { Box, Button, Image } from 'grommet';

import logo from '../assets/logo.svg';
import './App.css';
import AppWrapper from './AppWrapper';
import Search from './Search';

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

export default () => (
  <AppWrapper>
    <Page background="neutral-2">
      <Image height="200px" margin={{bottom: '1rem'}} src={logo} />
      <Search />
      <Button
        label="Typescript, React, Grommet and MobX"
        primary={true}
      />
    </Page>
  </AppWrapper>
);

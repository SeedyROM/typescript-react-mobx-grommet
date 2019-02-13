import * as React from 'react';

import { Box, Button, Grommet } from 'grommet';

import './App.css';
import AppWrapper from './AppWrapper';

export default () => (
  <AppWrapper>
    <Box align="center" justify="center" height="100vh" background="neutral-2">
      <Button
        label="hello world"
        primary={true}
      />
    </Box>
  </AppWrapper>
);

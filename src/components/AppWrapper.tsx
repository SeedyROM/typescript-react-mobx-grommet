import * as React from 'react';
import logo from '../assets/logo.svg';

import { Grommet } from 'grommet';
import { Provider } from 'mobx-react';

import applicationStore from '../store';
import { theme } from '../theme';

const Store = (props: any) => (
  <Provider store={applicationStore} {...props}>
    {props.children}
  </Provider>
);

const Theme = (props: any) => (
  <Grommet theme={theme} {...props}>
    {props.children}
  </Grommet>
);

export const AppWrapper = (props: any) => (
  <Store>
    <Theme>
      {props.children}
    </Theme>
  </Store>
);

export default AppWrapper;

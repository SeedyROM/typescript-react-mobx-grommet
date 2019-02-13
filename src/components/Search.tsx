import { Box, TextInput } from 'grommet';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';

import { ApplicationStore } from '../store';
import { IStoreProps } from '../store/types';

const Message = styled.div`
  margin-bottom: 2rem;
  font-style: italic;
`;

@inject('store')
@observer
export default class Search extends React.Component<IStoreProps> {
  public render() {
    const {searchBarStore} = this.props.store!;

    return (
      <>
        <Box width="200px" margin={{bottom: '1rem'}}>
          <TextInput
            placeholder="Enter a message for MobX..."
            onChange={this.handleChange}
            width="300px"
          />
        </Box>
        <Message>
          <b>MobX says backwards:</b> {(searchBarStore.value === '') ? 'Enter a message!' : searchBarStore.value}
        </Message>
      </>
    );
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { searchBarStore } = this.props.store!;

    const value = event.currentTarget.value;
    searchBarStore.value = value.split('').reverse().join('');
  }
}

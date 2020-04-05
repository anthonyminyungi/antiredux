import React, { Fragment } from 'react';
import Header from 'components/header';
import Flex from 'styled-flex-component';
import Notification from 'components/notification';

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Notification text={'Hello'} seen={false} />
    </Flex>
  </Fragment>
);

export default AppPresenter;

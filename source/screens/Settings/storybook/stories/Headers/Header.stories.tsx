/** @format */

import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Header } from '~/components/';

storiesOf('Header', module).add('Only title', () => <Header title="Home" />);

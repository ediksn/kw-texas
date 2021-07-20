/** @format */

import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Header } from '~/source/components/';

storiesOf('Header', module).add('Only title', () => <Header title="Home" />);

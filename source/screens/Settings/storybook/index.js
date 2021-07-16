/** @format */

import { AppRegistry } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';
import './stories';

addDecorator(withKnobs);

configure(() => {}, module);

const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;

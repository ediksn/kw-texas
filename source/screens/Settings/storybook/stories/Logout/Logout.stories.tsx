/** @format */

import React, { createElement } from 'react'
import { storiesOf } from '@storybook/react-native'
import { text, boolean } from '@storybook/addon-knobs'

import logout_btn from 'assets/images/logout_btn.png'
import ListButton from '~/components/ListButton'

storiesOf('Log out', module).add('Log out', () =>
  createElement(() => {
    return (
      <ListButton
        title={text('Title', 'Log out')}
        icon={logout_btn}
        onPress={() => null}
        arrow={boolean('Arrow', true)}
      />
    )
  })
)

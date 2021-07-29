/** @format */

import React, { createElement } from 'react'
import { storiesOf } from '@storybook/react-native'
import { color } from '@storybook/addon-knobs'
import { moderateScale } from 'react-native-size-matters'
import { VideoCard } from '~/components/'
import cunhaVar from '~/assets/images/cunhavar.jpeg'
import { theme } from '~/constants'

storiesOf('Video Card', module).add('Video card', () =>
  createElement(() => {
    return (
      <VideoCard
        img={cunhaVar}
        title='Gremio 1 River 2'
        author='LocoXRiverPlate1'
        visits={20.745}
        likes={912}
        backgroundColor={color('Background color', theme.beige)}
        textColor={color('Text color', theme.red)}
        style={{ margin: moderateScale(2) }}
      />
    )
  })
)

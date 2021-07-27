/** @format */

import React, { createElement } from 'react'
import { storiesOf } from '@storybook/react-native'
import { color } from '@storybook/addon-knobs'
import { VideoCard } from '~/components/'
import cunhaVar from '~/assets/images/cunhavar.jpeg'

storiesOf('Video Card', module).add('Video card', () =>
  createElement(() => {
    return (
      <VideoCard
        img={cunhaVar}
        title='Gremio 1 River 2'
        author='LocoXRiverPlate1'
        visits={20.745}
        likes={912}
        backgroundColor={color('Background color', '#fff8dc')}
        textColor={color('Text color', '#ce011f')}
        style={{ margin: '2%' }}
      />
    )
  })
)

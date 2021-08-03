/** @format */

import React, { createElement } from 'react'
import { storiesOf } from '@storybook/react-native'
import { moderateScale } from 'react-native-size-matters'
import { VideoCard } from '~/components/'
import video_thumbnail from '~/assets/images/video_thumbnail.png'

storiesOf('Video Card', module).add('Video card', () =>
  createElement(() => {
    return (
      <VideoCard
        img={video_thumbnail}
        title='Video Test 1'
        author='Keller Williams'
        visits={20.745}
        likes={912}
        style={{ margin: moderateScale(2) }}
      />
    )
  })
)

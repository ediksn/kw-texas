import React from 'react'
import { storiesOf } from '@storybook/react-native'

import VideoPlayer from '~/screens/Home/components/VideoPlayer'

storiesOf('VideoPlayer', module).add('VidePlayer', () => (
  <VideoPlayer
    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus elit vel lectus pulvinar, at
        scelerisque justo vehicula. Quisque placerat dictum tincidunt. Vivamus accumsan, risus nec ultricies
        convallis, ex sem placerat ante, in ultricies massa odio eu justo. Quisque a tellus eleifend, aliquet lacus
        quis, semper arcu.'
    uri='http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  />
))

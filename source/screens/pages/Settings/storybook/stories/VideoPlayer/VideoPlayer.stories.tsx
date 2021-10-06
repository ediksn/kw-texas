import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { boolean, number, text } from '@storybook/addon-knobs'

import VideoPlayer from '~/screens/pages/Conversations/components/VideoPlayer'

storiesOf('VideoPlayer', module).add('VidePlayer', () => (
  <VideoPlayer
    title={text(
      'Title',
      'Aenean ut massa nec mi rhoncus faucibus. Praesent faucibus gravida urna id ullamcorper. Integer at ultricies mauris. Donec elementum molestie augue, id pretium quam ultricies vitae. Morbi mollis vitae enim eu convallis. Vestibulum a porttitor odio, eu interdum nibh. Praesent urna felis, vulputate sit amet nibh a, scelerisque egestas orci. Proin ipsum elit, accumsan sed tortor ac, efficitur sodales justo. Fusce pharetra ante tempus tortor vehicula mollis accumsan. '
    )}
    uri='https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    videoLikes={number('Video Likes', 16)}
    saved={boolean('Is saved', false)}
    liked={boolean('Is liked', false)}
  />
))

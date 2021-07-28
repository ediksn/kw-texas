/** @format */

import React, { createElement } from 'react'
import { storiesOf } from '@storybook/react-native'
import { color } from '@storybook/addon-knobs'
import { moderateScale } from 'react-native-size-matters'
import { VideoList, VideoCard } from '~/components/'
import { theme } from '~/constants'
import cunhaVar from '~/assets/images/cunhavar.jpeg'

interface IVideo {
  id: string
  title: string
  author: string
  visits: number
  likes: number
}

storiesOf('VideoList', module).add('VideoList', () =>
  createElement(() => {
    const videos: IVideo[] = [
      {
        id: '1',
        title: 'Prueba 1',
        author: 'Probador 1',
        visits: 11111,
        likes: 111
      },
      {
        id: '2',
        title: 'Prueba 2',
        author: 'Probador 2',
        visits: 22222,
        likes: 222
      },
      {
        id: '3',
        title: 'Prueba 3',
        author: 'Probador 3',
        visits: 33333,
        likes: 333
      },
      {
        id: '4',
        title: 'Prueba 4',
        author: 'Probador 4',
        visits: 44444,
        likes: 444
      }
    ]
    const renderVideoComponent = ({ item }: { item: IVideo }) => (
      <VideoCard
        img={cunhaVar}
        title={item.title}
        author={item.author}
        visits={item.visits}
        likes={item.likes}
        backgroundColor={color('Background color', theme.beige)}
        textColor={color('Text color', theme.red)}
        style={{ margin: moderateScale(4) }}
      />
    )
    return <VideoList renderItem={renderVideoComponent} data={videos} keyExtractor={(item: IVideo) => item.id} />
  })
)

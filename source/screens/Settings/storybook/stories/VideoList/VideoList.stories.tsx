/** @format */

import React, { createElement, useRef, useState } from 'react'
import { storiesOf } from '@storybook/react-native'
import { Alert, ImageSourcePropType } from 'react-native'

import { VideoList } from '~/components/'
import video_thumbnail from '~/assets/images/video_thumbnail.png'

interface IVideo {
  id: string
  title: string
  author: string
  visits: number
  likes: number
  img: ImageSourcePropType
}

storiesOf('Video List', module).add('Video List', () =>
  createElement(() => {
    const videos: IVideo[] = [
      {
        id: '1',
        title: 'Test 1',
        author: 'Tester 1',
        visits: 11111,
        likes: 111,
        img: video_thumbnail
      },
      {
        id: '2',
        title: 'Test 2',
        author: 'Tester 2',
        visits: 22222,
        likes: 222,
        img: video_thumbnail
      },
      {
        id: '3',
        title: 'Test 3',
        author: 'Tester 3',
        visits: 33333,
        likes: 333,
        img: video_thumbnail
      },
      {
        id: '4',
        title: 'Test 4',
        author: 'Tester 4',
        visits: 44444,
        likes: 444,
        img: video_thumbnail
      }
    ]
    const [refresing, setRefreshing] = useState(false)
    const videoNumber = useRef(5)
    const onRefresh = () => {
      setRefreshing(true)
      setTimeout(() => {
        setRefreshing(false)
        videoNumber.current = 5
        Alert.alert('Refresh finished')
      }, 1000)
    }
    const onEndReached = () => {
      videos.push({
        id: videoNumber.current.toString(),
        title: `Test ${videoNumber.current.toString()}`,
        author: `Tester ${videoNumber.current.toString()}`,
        visits: videoNumber.current * 11111,
        likes: videoNumber.current * 111,
        img: video_thumbnail
      })
      videoNumber.current += 1
    }
    return (
      <VideoList
        data={videos}
        keyExtractor={(item: IVideo) => item.id}
        refreshing={refresing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
      />
    )
  })
)

/** @format */

import React, { useCallback } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'

import shooter from 'assets/images/shooter.png'
import { styles } from './styles'

const Recording = () => {
  const [{ cameraRef, isRecording }, { setIsRecording }] = useCamera()
  const recordOptions = {
    maxduration: 60
  }
  const startRecording = async () => {
    try {
      const promise = await cameraRef.current.recordAsync(recordOptions)
      setIsRecording(true)
      const data = await promise
      // eslint-disable-next-line no-console
      console.log('Video Recorded: ', data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  const stopRecording = useCallback(async () => {
    try {
      cameraRef.current.stopRecording()
      setIsRecording(false)
      // here we can do something with the video
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }, [isRecording])

  // eslint-disable-next-line no-console
  console.log(startRecording, stopRecording)

  return (
    <>
      <RNCamera ref={cameraRef} style={[{ flex: 1, width: '100%', height: 300 }]} type={RNCamera.Constants.Type.back}>
        <View style={[{ marginTop: 200 }]}>
          <Text style={styles.textContainer}>Start</Text>
          <TouchableOpacity style={styles.shooterContainer} onPress={() => {}}>
            <Image style={styles.shooter} resizeMode='contain' source={shooter} />
          </TouchableOpacity>
        </View>
      </RNCamera>
    </>
  )
}

export default Recording

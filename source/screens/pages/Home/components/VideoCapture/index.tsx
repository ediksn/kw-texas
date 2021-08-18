/** @format */

import React, { useCallback, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'

import shooter from 'assets/images/shooter.png'
import { styles } from './styles'

const Recording = () => {
  const [{ cameraRef, isRecording }, { setIsRecording }] = useCamera()
  const [finished, setFinished] = useState(false)
  const recordOptions = {
    maxduration: 60,
    fps: 30,
    mute: false,
    quality: 1080,
    codec: 'H264'
  }
  const startRecording = async () => {
    try {
      const promise = cameraRef.current.recordAsync(recordOptions)
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
      setFinished(true)
      // here we can do something with the video
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }, [isRecording])

  const buttonsVideo = () => {
    if (finished === true) {
      return (
        <View style={styles.buttonsContainer}>
          <Text style={styles.buttonsText} onPress={() => {}}>
            Preview
          </Text>
          <Text
            style={styles.buttonsText}
            onPress={() => {
              setFinished(false)
            }}
          >
            Retry
          </Text>
          <Text style={styles.buttonsText}>Save</Text>
        </View>
      )
    }
    return null
  }

  return (
    <>
      <RNCamera ref={cameraRef} style={[{ flex: 2, width: '100%', height: 300 }]} type={RNCamera.Constants.Type.back}>
        <View style={styles.controlContainer}>
          {isRecording && <Text style={styles.textContainer}>Recording</Text>}
          {!isRecording && <Text style={styles.textContainer}>Start</Text>}
          <TouchableOpacity style={styles.shooterContainer} onPress={isRecording ? stopRecording : startRecording}>
            <Image style={styles.shooter} resizeMode='contain' source={shooter} />
          </TouchableOpacity>
        </View>
      </RNCamera>
      {buttonsVideo()}
      <View style={styles.usrContainer}>
        <View style={styles.usrAvatar} />
        <View style={styles.usrInfo}>
          <Text style={styles.usrName}>Irene Murphy</Text>
          <View style={styles.usrStatus}>
            <Text style={styles.usrType}>AGENTS</Text>
            <Text style={styles.usrStat}>Active</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default Recording

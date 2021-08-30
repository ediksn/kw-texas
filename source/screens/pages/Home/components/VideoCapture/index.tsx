/** @format */

import React, { useCallback, useState, useRef } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'

import shooter from 'assets/images/shooter.png'
import calculateTime from './hooks/calculateTime'
import { styles } from './styles'

const Recording = () => {
  const [{ cameraRef, isRecording }, { setIsRecording }] = useCamera()
  const [finished, setFinished] = useState(false)
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0)
  const recordOptions = {
    maxduration: 120,
    fps: 30,
    mute: false,
    quality: 720,
    codec: 'H264'
  }

  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null)

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimeInSeconds(prevState => prevState + 1)
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout)
  }

  const startRecording = async () => {
    try {
      const promise = cameraRef.current.recordAsync(recordOptions)
      setIsRecording(true)
      const data = await promise
    } catch (err) {
      null
    }
  }

  const stopRecording = useCallback(async () => {
    try {
      cameraRef.current.stopRecording()
      setIsRecording(false)
      setFinished(true)
    } catch (err) {
      null
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
              setTimeInSeconds(0)
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
      <RNCamera
        ref={cameraRef}
        style={[{ flex: 1, width: '100%' }]}
        type={RNCamera.Constants.Type.front}
        onRecordingStart={() => startTimer()}
        onRecordingEnd={() => stopTimer()}
      >
        <View style={styles.counter}>
          <Text style={styles.counterNumbers}>{calculateTime(timeInSeconds)}</Text>
        </View>

        {!finished && (
          <View style={styles.controlContainer}>
            {isRecording && <Text style={styles.textContainer}>Recording</Text>}
            {!isRecording && <Text style={styles.textContainer}>Start</Text>}
            <TouchableOpacity style={styles.shooterContainer} onPress={isRecording ? stopRecording : startRecording}>
              <Image style={styles.shooter} resizeMode='contain' source={shooter} />
            </TouchableOpacity>
          </View>
        )}
        {buttonsVideo()}
      </RNCamera>
    </>
  )
}

export default Recording

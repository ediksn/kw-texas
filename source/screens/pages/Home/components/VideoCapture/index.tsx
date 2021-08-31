/** @format */

import React, { useCallback, useState, useRef } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import Modal from 'react-native-modal'

import shooter from 'assets/images/shooter.png'
import calculateTime from './hooks/calculateTime'
import { styles } from './styles'
import SaveVideo from '../../pages/Studio/components/SaveVideo'

const Recording = () => {
  const [{ cameraRef, isRecording }, { setIsRecording }] = useCamera()
  const [finished, setFinished] = useState(false)
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState()
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
      const videoRecorded = await promise
      setData(videoRecorded)
    } catch (err) {
      // handle error
    }
  }

  const stopRecording = useCallback(async () => {
    try {
      cameraRef.current.stopRecording()
      setIsRecording(false)
      setFinished(true)
    } catch (err) {
      // handle error
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
          <Text
            style={styles.buttonsText}
            onPress={() => {
              setModalVisible(true)
            }}
          >
            Save
          </Text>
        </View>
      )
    }
    return null
  }

  return (
    <>
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <SaveVideo setOpen={setModalVisible} data={data} />
      </Modal>
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

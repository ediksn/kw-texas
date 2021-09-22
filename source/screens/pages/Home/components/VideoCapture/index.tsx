import React, { useCallback, useState, useRef } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import Modal from 'react-native-modal'
import { useTranslation } from 'react-i18next'
import shooter from 'assets/images/shooter.png'
import back_arrow_btn from 'assets/images/back_arrow_btn.png'
import { Button } from '~/components'
import calculateTime from './hooks/calculateTime'
import { styles } from './styles'
import SaveVideo from '../../pages/Studio/components/SaveVideo'
import { theme } from '~/constants'

const Recording = () => {
  const { t } = useTranslation()
  const [{ cameraRef, isRecording }, { setIsRecording }] = useCamera()
  const [finished, setFinished] = useState(false)
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [videoRecorded, setVideoRecorded] = useState()
  const recordOptions = {
    maxduration: 120,
    fps: 30,
    mute: false,
    quality: 720,
    codec: 'H264'
  }
  const isFocused = useIsFocused()
  const navigation = useNavigation()

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
      setVideoRecorded(await promise)
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
          <Button THEME={theme.buttons.secondary} message={t('Preview')} viewStyle={styles.buttonsText} />
          <Button
            THEME={theme.buttons.secondary}
            message={t('Retry')}
            viewStyle={styles.buttonsText}
            onPress={() => {
              setFinished(false)
              setTimeInSeconds(0)
            }}
          />
          <Button
            THEME={theme.buttons.secondary}
            message={t('Save')}
            viewStyle={styles.buttonsText}
            onPress={() => {
              setModalVisible(true)
            }}
          />
        </View>
      )
    }
    return null
  }

  return isFocused ? (
    <>
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        {videoRecorded && <SaveVideo setOpen={setModalVisible} videoUri={videoRecorded} />}
      </Modal>
      <RNCamera
        ref={cameraRef}
        style={[{ flex: 1, width: '100%' }]}
        type={RNCamera.Constants.Type.front}
        onRecordingStart={() => startTimer()}
        onRecordingEnd={() => stopTimer()}
      >
        <View style={styles.cameraHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backArrowBtn} resizeMode='center' source={back_arrow_btn} />
          </TouchableOpacity>
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
  ) : (
    <></>
  )
}

export default Recording

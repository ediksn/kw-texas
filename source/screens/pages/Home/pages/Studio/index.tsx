/** @format */

import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'
import { styles } from './styles'
import SaveVideo from './components/SaveVideo'
import { Button } from '~/components'

export const Studio = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Button message='Open Modal' onPress={() => setModalVisible(true)} />
        <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
          <SaveVideo setOpen={setModalVisible} />
        </Modal>
      </View>
    </SafeAreaView>
  )
}

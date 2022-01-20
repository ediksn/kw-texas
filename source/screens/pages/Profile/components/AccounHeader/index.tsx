import React from 'react'
import { Header } from '~/components'
import { styles } from './styles'

const AccountHeader = (
  title: string,
  leftButton?: JSX.Element,
  rightButton?: JSX.Element,
  onClickLeft?: () => void,
  onClickRight?: () => void
) => {
  return {
    header: () => {
      return (
        <Header
          style={styles.container}
          title={title}
          leftButton={leftButton}
          rightButton={rightButton}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
        />
      )
    }
  }
}

export default AccountHeader

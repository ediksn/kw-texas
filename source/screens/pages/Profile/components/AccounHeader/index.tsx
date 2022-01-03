import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { Header, Icon } from '~/components'
import { theme } from '~/constants'
import { styles } from './styles'

const AccountHeader = (title: string, leftButton?: boolean, rightButton?: boolean, onClickLeft?: () => void) => {
  const { t } = useTranslation()
  const rightButtonComponent = <Text style={styles.textStyle}>{t('components_NewPost_Edit')}</Text>
  const leftButtonComponent = <Icon name='arrow-back' size={theme.fonts.LARGE_SIZE} />

  return {
    header: () => {
      return (
        <Header
          style={styles.container}
          title={title}
          leftButton={leftButton ? leftButtonComponent : null}
          rightButton={rightButton ? rightButtonComponent : null}
          onClickLeft={onClickLeft}
        />
      )
    }
  }
}

export default AccountHeader

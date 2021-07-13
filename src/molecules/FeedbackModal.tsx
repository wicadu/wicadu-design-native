import React, { useCallback, useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View, Dimensions } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import Colors from '../constants/colors'
import Modal from '../atoms/Modal'
import Button from '../atoms/Button'
import Typography from '../atoms/Typography'

const propTypes = {
  type: PropTypes.oneOf(['success', 'error']),
  title: PropTypes.string,
  description: PropTypes.string,
  toActionMessage: PropTypes.string,
  toActionCallback: PropTypes.func,
  visible: PropTypes.bool,
}

const icons = {
  success: 'checkcircle',
  error: 'exclamationcircle'
}

type Props = InferProps<typeof propTypes>

function FeedbackModal (props: Props) {
  const { visible, type, title, description, toActionCallback, toActionMessage = 'Cerrar' } = props

  const [isVisible, setIsVisible] = useState<boolean>(Boolean(visible))

  const handlePress = useCallback(() => {
    setIsVisible(false)

    if (toActionCallback) toActionCallback()
  } , [setIsVisible, toActionCallback])

  useEffect(() => {
    setIsVisible(Boolean(visible))
  }, [visible])

  const generatedStyles = styles(props)

  return (
    <Modal visible={isVisible}>
      <View style={generatedStyles.container}>
        <View style={generatedStyles.content}>
          <AntDesign name={icons[type]} size={90} color={Colors[type]} />

          <Typography type='title-2' style={generatedStyles.title}>{title}</Typography>
          <Typography type='description' style={generatedStyles.description}>{description}</Typography>

          <Button
            children={String(toActionMessage)}
            containerStyle={generatedStyles.callToAction}
            size='large'
            onPress={handlePress}
          />
        </View>
      </View>
    </Modal>
  )
}

const { width } = Dimensions.get('screen')

const styles = (props: Props) => {
  return StyleSheet.create({
    container: {
      height: 350,
    },
    content: {
      flex: 1,
      marginVertical: 20,
      alignItems: 'center',
    },
    title: {
      marginTop: 30,
      marginBottom: 10
    },
    description: {
      marginBottom: 30,
      textAlign: 'center',
      maxWidth: 350
    },
    callToAction: {
      width: width / 1.2,
      maxWidth: 350
    }
  })
}

FeedbackModal.propTypes = propTypes

export default FeedbackModal

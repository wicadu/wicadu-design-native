import React, { useCallback, useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View, Modal as NativeModal, Pressable } from 'react-native'

import Typography from '@wicadu/native-ui/src/atoms/Typography'
import Button from '@wicadu/native-ui/src/atoms/Button'
import IconContainer from '@wicadu/native-ui/src/atoms/IconContainer'

const propTypes = {
  visible: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  toCancelMessage: PropTypes.string,
  toCancelCallback: PropTypes.func
}

type Props = InferProps<typeof propTypes>

function ModalOptionPicker (props: Props) {
  const { visible, options, toCancelMessage, toCancelCallback } = props

  const [isVisible, setIsVisible] = useState<boolean>(visible)

  const handlePress = useCallback(() => {
    setIsVisible(false)

    if (toCancelCallback) toCancelCallback()
  }, [setIsVisible, toCancelCallback])

  useEffect(() => {
    setIsVisible(visible)
  }, [visible])

  const generatedStyles = styles(props)

  return (
    <NativeModal animationType='slide' transparent visible={isVisible}>
      <View style={generatedStyles.backgroundScreen} />
      <View style={generatedStyles.container}>
        {options?.map(({ name, id, icon, onPress }: any) => (
          <Pressable onPress={onPress} key={`modal-option-${id}`}>
            <View style={generatedStyles.option}>
              {icon ? <IconContainer icon={icon} containerStyle={generatedStyles.optionIcon} /> : null}
              <Typography>{name}</Typography>
            </View>
          </Pressable>
        ))}

        <Button size='large' type='error' onPress={handlePress}>{toCancelMessage}</Button>
      </View>
    </NativeModal>
  )
}

const styles = (props: Props) => {
  return StyleSheet.create({
    backgroundScreen: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 30,
      marginHorizontal: 15
    },
    option: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    optionIcon: {
      height: 30,
      width: 30,
      marginRight: 10
    }
  })
}

ModalOptionPicker.propTypes = propTypes

export default ModalOptionPicker

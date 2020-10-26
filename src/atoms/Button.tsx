import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { Colors } from '../constants'

const propTypes = {
  type: PropTypes.string,
  inverse: PropTypes.bool,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  usingTheme: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number
}

interface DefaultProps {
  disabled?: boolean,
  id: string
  onPress?: () => void,
  accessible: boolean
} 

const defaultProps: (DefaultProps & Props) = {
  onPress: () => {},
  disabled: false,
  id: '',
  accessible: true,
  inverse: false,
  bgColor: 'primary',
  usingTheme: true,
  height: 55,
  width: null
}

type Props = InferProps<typeof propTypes>

function Button(props: Props & DefaultProps) {
  const generatedStyles = styles(props)

  const { title, onPress, disabled, id, accessible } = props

  return (
    <TouchableWithoutFeedback onPress={onPress} accessible={accessible} accessibilityLabel={id} disabled={disabled}>
      <View style={generatedStyles.container}>
        <Text style={generatedStyles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = (props: (Props & DefaultProps)) => {
  const { inverse, bgColor, height, width } = props

  const containerColors = inverse ? {
    borderWidth: 1,
    borderColor: Colors[bgColor] || Colors.primary,
    backgroundColor: 'transparent'
  } : {
    backgroundColor: Colors[bgColor] || Colors.primary,
    borderWidth: 0,
  }

  return StyleSheet.create({
    container: {
      ...containerColors,
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      height: height,
      width: width
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: inverse ? Colors[bgColor] : 'white',
    }
  })
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

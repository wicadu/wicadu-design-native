import React from 'react'
import { TextInput as Input, StyleSheet, Text, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { Colors } from '../constants'

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  maxLength: PropTypes.number
}

interface DefaultProps {
  radius: number,
  bgColor: string,
  error: boolean | object,
  inputStyles: object,
  keyboardType: string
}

const defaultProps: DefaultProps = {
  radius: 15,
  bgColor: 'white',
  error: false,
  inputStyles: {},
  keyboardType: 'default'
}

type Props = InferProps<typeof propTypes>

function TextInput(props: Props & DefaultProps) {
  const generatedStyles = styles(props)
  
  const { error } = props

  return (
    <View style={generatedStyles.container}>
      <View style={generatedStyles.inputContainer}>
        <Input style={generatedStyles.input} {...props} />
      </View>
      { error && <Text style={generatedStyles.error}>Este campo es obligatorio</Text>}
    </View>
  )
}

const styles = (props: DefaultProps) => {
  const { radius, bgColor, error, inputStyles } = props

  return StyleSheet.create({
    container: {
      marginVertical: 10
    },
    inputContainer: {
      borderRadius: radius,
      backgroundColor: Colors[bgColor],
      paddingVertical: 15,
      paddingHorizontal: 10,
      margin: 0,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: error ? 'rgb(246, 71, 71)' : 'transparent'
    },
    input: {
      fontSize: 18,
      ...inputStyles
    },
    error: {
      color: 'rgb(246, 71, 71)',
    }
  })
}

TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps

export default TextInput

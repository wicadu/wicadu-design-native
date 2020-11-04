import React from 'react'
import { TextInput as Input, StyleSheet, Text, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import Colors from '../constants/colors'

const propTypes = {
  label: PropTypes.string,
  radius: PropTypes.number,
  bgColor: PropTypes.string,
  inputStyles: PropTypes.object,
  error: PropTypes.shape({
    message: PropTypes.string
  }).isRequired,
  onChangeText: PropTypes.func.isRequired
}

interface DefaultProps {
  keyboardType: string | any,
  onChangeText?: (value: string) => void,
  autoCompleteType?: string | any,
  autoFocus: boolean,
  value: string,
  maxLength: number,
  placeholder: string,
}

const defaultProps: (Props & DefaultProps) = {
  radius: 15,
  bgColor: 'white',
  error: {},
  inputStyles: {},
  keyboardType: 'default',
  autoCompleteType: 'off',
  autoFocus: false,
  value: '',
  maxLength: 100,
  placeholder: '',
  onChangeText(){}
}

type Props = InferProps<typeof propTypes>

function TextInput(props: Props & DefaultProps) {
  const generatedStyles = styles(props)
  
  const { error, autoCompleteType, keyboardType, autoFocus, onChangeText, value, maxLength, placeholder } = props

  return (
    <View style={generatedStyles.container}>
      <View style={generatedStyles.inputContainer}>
        <Input
          style={generatedStyles.input}
          autoCompleteType={autoCompleteType}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          onChangeText={(value: string) => onChangeText(value)}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          autoCapitalize='none'
        />
      </View>
      { Object.values(error).length >= 1 &&
        <Text style={generatedStyles.error}>
          {error.message || 'Este campo es obligatorio'}
        </Text>
      }
    </View>
  )
}

const styles = (props: Props & DefaultProps) => {
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
      borderColor: Object.values(error).length >= 1 ? 'rgb(246, 71, 71)' : 'transparent'
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

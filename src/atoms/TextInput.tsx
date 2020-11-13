import React from 'react'
import { TextInput as Input, StyleSheet, Text, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import Colors from '../constants/colors'

const propTypes = {
  label: PropTypes.string,
  radius: PropTypes.number,
  bgColor: PropTypes.string,
  inputStyles: PropTypes.object,
  keyboardType: PropTypes.string,
  autoCompleteType: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }),
  onChangeText: PropTypes.func,
  autoCapitalize: PropTypes.string
}

const defaultProps: Props = {
  radius: 15,
  bgColor: 'white',
  inputStyles: {},
  keyboardType: 'default',
  autoCompleteType: 'off',
  autoFocus: false,
  value: '',
  maxLength: 100,
  placeholder: '',
  onChangeText () {},
  autoCapitalize: 'none'
}

type Props = InferProps<typeof propTypes>

function TextInput(props: Props) {
  const generatedStyles = styles(props)

  const { value, onChangeText, error } = props

  return (
    <View style={generatedStyles.container}>
      <View style={generatedStyles.inputContainer}>
        <Input
          style={generatedStyles.input}
          value={value}
          onChangeText={(value: string) => onChangeText(value)}
          {...props}
        />
      </View>
      {Boolean(error) && <Text style={generatedStyles.error}>{error.message}</Text>}
    </View>
  )
}

const styles = (props: Props) => {
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
      borderColor: Boolean(error) ? Colors.error : 'transparent'
    },
    input: {
      fontSize: 18,
      ...inputStyles
    },
    error: {
      color: Colors.error,
    }
  })
}

TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps

export default TextInput

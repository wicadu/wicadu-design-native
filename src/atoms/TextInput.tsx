import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { TextInput as Input, StyleSheet, View } from 'react-native'

import Colors from '../constants/colors'
import Fonts from '../constants/fonts'
import Typography from './Typography'

const propTypes = {
  label: PropTypes.string,
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
  onChange: PropTypes.func,
  autoCapitalize: PropTypes.string,
  noError: PropTypes.bool,
  optional: PropTypes.bool,
  helpMessage: PropTypes.string
}

const defaultProps: Props = {
  keyboardType: 'default',
  autoCompleteType: 'off',
  autoFocus: false,
  value: '',
  maxLength: 100,
  placeholder: '',
  onChange () {},
  autoCapitalize: 'none',
  noError: false,
  helpMessage: ''
}

type Props = InferProps<typeof propTypes>

function TextInput(props: Props) {
  const generatedStyles = styles(props)

  const { value, onChange, label, error, noError, optional, helpMessage, ...restProps } = props

  return (
    <View>
      {!!label && (
        <View style={generatedStyles.labelContainer}>
          <Typography type='title-4' style={generatedStyles.label}>{label}</Typography>
          {optional && (
            <Typography type='description' style={generatedStyles.label}>(Opcional)</Typography>
          )}
        </View>
      )}

      <View style={generatedStyles.inputContainer}>
        <Input
          style={generatedStyles.input}
          value={value}
          onChangeText={(value: string) => onChange(value)}
          {...restProps}
        />
      </View>

      {!noError && (
        <View style={generatedStyles.errorContainer}>
          {!!error ? (
            <Typography size={14} style={generatedStyles.error}>{error?.message}</Typography>
          ): (
            <Typography size={Fonts.f14} style={generatedStyles.helpMessageContainer} type='description'>{helpMessage}</Typography>
          )}
        </View>
      )}
    </View>
  )
}

const styles = (props: Props) => {
  const { error, helpMessage } = props

  return StyleSheet.create({
    inputContainer: {
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      paddingVertical: 15,
      paddingHorizontal: 10,
      margin: 0,
      borderWidth: 1,
      borderColor: Boolean(error) ? Colors.error : 'transparent'
    },
    labelContainer: {
      flexDirection: 'row',
    },
    label: {
      fontSize: 14,
      marginBottom: 5,
      marginRight: 5,
    },
    input: {
      fontSize: 18
    },
    errorContainer: {
      minHeight: helpMessage ? 30 : 15,
      marginVertical: 5,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    error: {
      color: Colors.error,
      textAlign: 'right'
    },
    helpMessageContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  })
}

TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps

export default TextInput

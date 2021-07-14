import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { TextInput as Input, StyleSheet, View } from 'react-native'

import colors from '../constants/colors'
import fonts from '../constants/fonts'
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
  helpMessage: PropTypes.string,
  borders: PropTypes.bool
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
  helpMessage: '',
  borders: false
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
        <View style={generatedStyles.FEEDBACK.ERRORContainer}>
          {!!error ? (
            <Typography size={14} style={generatedStyles.FEEDBACK.ERROR}>{error?.message}</Typography>
          ): (
            <Typography size={fonts.F14} style={generatedStyles.helpMessageContainer} type='description'>{helpMessage}</Typography>
          )}
        </View>
      )}
    </View>
  )
}

const styles = (props: Props) => {
  const { error, borders, helpMessage } = props

  let borderColor = 'transparent'

  if (borders) borderColor = colors.NEUTRAL.DARK_GRAY
  if (Boolean(error)) borderColor = colors.FEEDBACK.ERROR

  return StyleSheet.create({
    inputContainer: {
      borderRadius: 5,
      backgroundColor: '#FFFFFF',
      paddingVertical: 15,
      paddingHorizontal: 10,
      margin: 0,
      borderWidth: 1,
      borderColor
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
      minHeight: helpMessage ? 30 : 20,
      marginVertical: 5,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    error: {
      color: colors.FEEDBACK.ERROR,
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

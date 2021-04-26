import React from 'react'
import { TextInput as Input, StyleSheet, View } from 'react-native'
import Colors from '../constants/colors'
import Typography from './Typography'
import PropTypes, { InferProps } from 'prop-types'

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
  onChangeText: PropTypes.func,
  autoCapitalize: PropTypes.string
}

const defaultProps: Props = {
  bgColor: 'white',
  keyboardType: 'default',
  autoCompleteType: 'off',
  autoFocus: false,
  value: '',
  maxLength: 100,
  placeholder: '',
  onChange () {},
  autoCapitalize: 'none'
}

type Props = InferProps<typeof propTypes>

function TextInput(props: Props) {
  const generatedStyles = styles(props)

  const { value, onChange, label, error, ...restProps } = props

  return (
    <View>
      {Boolean(label) && (
        <Typography type='title-4' style={generatedStyles.label}>
          {label}
        </Typography>
      )}
      <View style={generatedStyles.inputContainer}>
        <Input
          style={generatedStyles.input}
          value={value}
          onChangeText={(value: string) => onChange(value)}
          {...restProps}
        />
      </View>
      <View style={generatedStyles.errorContainer}>
        {Boolean(error) && (
          <Typography size={14} style={generatedStyles.error}>
            {error.message}
          </Typography>
        )}
      </View>
    </View>
  )
}

const styles = (props: Props) => {
  const { error } = props

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
    label: {
      fontSize: 14
    },
    input: {
      fontSize: 18
    },
    errorContainer: {
      height: 17,
      marginVertical: 5
    },
    error: {
      color: Colors.error,
      textAlign: 'right'
    }
  })
}

TextInput.propTypes = propTypes
TextInput.defaultProps = defaultProps

export default TextInput

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { View } from 'react-native'
import TextInput from '../atoms/TextInput'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCompleteType: PropTypes.string,
  autoFocus: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  defaultValue: ''
}

function Input ({ name, defaultValue, ...props }: Props) {
  const { control, errors } = useFormContext()

  const error: { type: string, message: string } | undefined = errors[name]

  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            onChangeText={(value: string) => onChange(value)}
            value={value}
            error={error}
            {...props}
          />
        )}
        defaultValue={defaultValue}
      />
    </View>
  )
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input

import React from 'react'
import { View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { Controller, useFormContext } from 'react-hook-form'

import TextInput from '../atoms/TextInput'
import InputError from '../@types/InputError'

const propTypes = {
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoCompleteType: PropTypes.string,
  autoFocus: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  defaultValue: ''
}

function Input ({ name, defaultValue, ...props }: Props) {
  const { control, errors } = useFormContext()

  const error: InputError | undefined = errors[name]

  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ onChange, value }) => (
          <TextInput
            onChange={(value: string) => onChange(value)}
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

import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { View } from 'react-native'
import Radio from '../atoms/Radio'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  value: ''
}

function RadioButton ({ name, type, value: defaultValue, ...props }: Props) {
  const { control, watch } = useFormContext()

  const formValue = watch(name)
console.log('DATA', formValue, name)
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ onChange, value }) => {
          console.log('value', value)
          return (
            <Radio
              onChange={(value: string) => onChange(value)}
              value={value}
              checked={value === formValue}
              {...props}
            />
          )
        }}
        defaultValue={defaultValue}
      />
    </View>
  )
}

RadioButton.propTypes = propTypes
RadioButton.defaultProps = defaultProps

export default RadioButton

import React from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
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
  const { control } = useFormContext()

  const formValue = useWatch({
    control,
    name
  })

  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ onChange }) => {
          return (
            <Radio
              onChange={(value: string) => onChange(value)}
              value={defaultValue}
              checked={defaultValue === formValue}
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

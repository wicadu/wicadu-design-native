import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { View } from 'react-native'

const propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps = {
  value: ''
}

function RadioController ({ children, name, value: defaultValue, ...props }: Props) {
  const { control } = useFormContext()

  const formValue = useWatch({
    control,
    name
  })

  return (
      <Controller
        name={name}
        control={control}
        render={({ onChange }) => {
          const handleOnChange = () => {
            if (props.disabled) return
            onChange(defaultValue)
          }
  
          return (
            <View>
              <TouchableWithoutFeedback onPress={handleOnChange}>
                {React.cloneElement(children, { checked: formValue === defaultValue, ...props })}
              </TouchableWithoutFeedback>
            </View>
          )
        }}
        defaultValue=''
      />
  )
}

RadioController.propTypes = propTypes
RadioController.defaultProps = defaultProps

export default RadioController

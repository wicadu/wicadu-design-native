import React, { useCallback } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import Colors from '../constants/colors'

const propTypes = {
  onChangeSelected: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'bordered']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  checked: PropTypes.bool,
  checkedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
}

const defaultProps: Props = {
  onChangeSelected(){},
  type: 'primary',
  size: 'default',
  checked: false,
  disabled: false,
  value: '',
  checkedValue: ''
}

type Props = InferProps<typeof propTypes>

function RadioButton (props: Props){
  const generatedStyles = styles(props)

  const { onChangeSelected, disabled, value } = props

  const onPressed = useCallback(() => {
    if (disabled) return

    onChangeSelected(value)
  }, [disabled, onChangeSelected, value])

  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <View style={generatedStyles.container}>
        <View style={generatedStyles.bullet} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = ({ type, size, disabled, checked, value, checkedValue }: Props) => {
  let classType: string = type

  if (checked || checkedValue === value) classType += '-checked'
  if (disabled) classType += '-disabled'

  const sizes: object = {
    'small': 30,
    'medium': 40,
    'large': 50,
  }

  const classes: object = {
    container: {
      'primary': {},
      'primary-checked': {},
      'bordered': {
        borderWidth: 1,
        borderColor: Colors.primary,
      },
      'bordered-checked': {
        borderWidth: 1,
        borderColor: Colors.primary,
        padding: 4
      }
    },
    bullet: {
      'primary': {
        borderWidth: 1,
        borderColor: Colors.primary,
      },
      'primary-checked': {
        backgroundColor: Colors.primary,
      },
      'primary-disabled': {
        backgroundColor: Colors.gray,
      },
      'bordered': {},
      'bordered-checked': {
        backgroundColor: Colors.primary,
        height: sizes[size] - 10,
        width: sizes[size] - 10,
      }
    },
  }
  
  const defaultStyles: object = {
    borderRadius: 50
  }

  const defaultContainerStyles: object = {
    margin: 5,
    height: sizes[size],
    width: sizes[size]
  }

  const defaultBulletStyles: object = {
    height: sizes[size],
    width: sizes[size]
  }

  return StyleSheet.create({
    container: {
      ...defaultStyles,
      ...defaultContainerStyles,
      ...classes.container[classType],
    },
    bullet: {
      ...defaultStyles,
      ...defaultBulletStyles,
      ...classes.bullet[classType],
    },
  })
}

RadioButton.propTypes = propTypes
RadioButton.defaultProps = defaultProps


export default RadioButton

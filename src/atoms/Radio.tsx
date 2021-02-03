import React, { useCallback } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  type: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  checked: PropTypes.bool,
  checkedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChangeSelected: PropTypes.func.isRequired
}

const defaultProps: Props = {
  type: 'primary',
  size: 'medium',
  value: '',
  checkedValue: '',
  onChangeSelected () {}
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

const styles = ({ type: classType, size, disabled, checked }: Props) => {
  if (checked) classType += '-checked'
  if (disabled) classType += '-disabled'

  const sizes: object = {
    'small': 20,
    'medium': 25,
    'large': 30
  }

  const classes: object = {
    container: {
      'primary': {
        borderColor: Colors.darkGray,
      },
      'primary-checked': {
        borderColor: Colors.primary
      },
      'primary-disabled': {
        borderColor: Colors.lightGray
      }
    },
    bullet: {
      'primary': {},
      'primary-checked': {
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
    borderWidth: 2,
    height: sizes[size],
    width: sizes[size],
    justifyContent: 'center',
    alignItems: 'center'
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

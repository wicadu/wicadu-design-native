import React, { useCallback } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  type: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

const defaultProps: Props = {
  type: 'primary',
  size: 'medium',
  value: '',
  onChange () {}
}

type Props = InferProps<typeof propTypes>

function Radio (props: Props){
  const generatedStyles = styles(props)

  const { onChange, disabled, value } = props

  const handlePressed = useCallback(() => {
    if (disabled) return
    onChange(value)
  }, [disabled, onChange, value])

  return (
    <TouchableWithoutFeedback onPress={handlePressed}>
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
        borderColor: Colors.primary,
        borderWidth: 1
      },
      'primary-disabled': {
        borderColor: Colors.lightGray
      }
    },
    bullet: {
      'primary': {},
      'primary-checked': {
        backgroundColor: Colors.primary,
        height: sizes[size] - 7,
        width: sizes[size] - 7
      }
    },
  }
  
  const defaultStyles: object = {
    borderRadius: 50
  }

  const defaultContainerStyles: object = {
    borderWidth: 1.5,
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

Radio.propTypes = propTypes
Radio.defaultProps = defaultProps


export default Radio

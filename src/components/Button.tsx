import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import { Colors, Fonts } from '../constants'

const propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  inverse: PropTypes.bool,
  size: PropTypes.string,
  onPress: PropTypes.func
}

type Props = InferProps<typeof propTypes>

interface StylesProps {
  type?: string,
  size?: string,
  inverse?: boolean
}

const defaultProps: Props | StylesProps = {
  type: 'primary',
  size: 'large',
  inverse: false,
  onPress: () => {}
}

function Button({ title, type, size, inverse, onPress }: Props) {
  const generatedStyles = styles({ type, inverse, size })

  return (
    <TouchableOpacity style={generatedStyles.container} onPress={onPress}>
      <Text style={generatedStyles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = ({ type, size, inverse }: StylesProps) => {
  const classType = `${type}${inverse && '-inverse'}`

  const defaultStylesContainer = {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }

  const classes = {
    container: {
      'primary': {
        ...defaultStylesContainer,
        backgroundColor: Colors.primary,
      },
      'primary-inverse': {
        ...defaultStylesContainer,
        borderWidth: 1,
        borderColor: Colors.primary
      },
    },
    sizeContainer: {
      'small': {
        width: 100,
        height: 30
      },
      'medium': {
        width: 180,
        height: 35
      },
      'large': {
        width: Dimensions.get('window').width,
        height: 50
      }
    },
    text: {
      'primary': {
        color: Colors.white,
        fontSize: Fonts.size14
      },
      'primary-inverse': {
        color: Colors.primary,
        fontSize: Fonts.size14
      }
    }
  }

  const styles = {
    container: {
      ...classes.container[classType],
      ...classes.sizeContainer[size]
    },
    text: {
      ...classes.text[classType]
    }
  }

  return StyleSheet.create(styles)
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

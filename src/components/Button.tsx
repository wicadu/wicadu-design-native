import React from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { Colors, Fonts } from '../constants'

const propTypes = {
  title: PropTypes.string.isRequired
}

interface DefaultProps {
  type?: string,
  inverse?: boolean,
  onPress?: () => void,
  size?: string
}

const defaultProps: DefaultProps = {
  type: 'primary',
  inverse: false,
  onPress: () => {},
  size: 'large'
}

type Props = InferProps<typeof propTypes>

function ButtonWrapper({ title, inverse, type, size, onPress }: Props & DefaultProps) {
  const classes = styles({ type, inverse, size })

  return (
    <TouchableOpacity style={classes.container} onPress={onPress}>
      <Text style={classes.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = ({ type, size, inverse }: DefaultProps) => {
  const typeClass = inverse ? `${type}-inverse` : type

  const defaultStyles = {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }

  const dimentions = {
    small: {
      height: 30,
      width: 100,
    },
    medium: {
      height: 35,
      width: 180
    },
    large: {
      height: 50,
      width: Dimensions.get('window').width
    }
  }

  const classes = {
    'primary': {
      backgroundColor: Colors.primary,
      ...defaultStyles,
    },
    'primary-text': {
      color: Colors.white,
      fontSize: Fonts.size14
    },
    'primary-inverse': {
      borderWidth: 1,
      borderColor: Colors.primary,
      ...defaultStyles
    },
    'primary-inverse-text': {
      color: Colors.primary,
      fontSize: Fonts.size14
    }
  }

  return StyleSheet.create({
    container: {
      ...classes[typeClass],
      ...dimentions[size]
    },
    text: {
      ...classes[`${typeClass}-text`]
    }
  })
}

ButtonWrapper.propTypes = propTypes
ButtonWrapper.defaultProps = defaultProps

export default ButtonWrapper

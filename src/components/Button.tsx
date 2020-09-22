import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'

import PropTypes, { InferProps } from 'prop-types'
import { Colors, Fonts } from '../constants'

const propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  inverse: PropTypes.bool,
  size: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  id: PropTypes.string
}

interface DefaultProps {
  type?: string,
  size?: string,
  inverse?: boolean,
  disabled?: boolean,
  onPress?: () => void,
  id: string
}

const defaultProps: DefaultProps = {
  type: 'primary',
  size: 'large',
  inverse: false,
  onPress: () => {},
  disabled: false,
  id: ''
}

type Props = InferProps<typeof propTypes>

function Button(props: Props & DefaultProps) {
  const generatedStyles = styles(props)

  const { title, onPress, disabled, id } = props

  return (
    <TouchableWithoutFeedback onPress={onPress} accessible accessibilityLabel={id} disabled={disabled}>
      <View style={generatedStyles.container}>
        <Text style={generatedStyles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = ({ type, size, inverse }: DefaultProps) => {
  const classType: string = `${type}${inverse ? '-inverse' : ''}`

  const defaultStylesContainer: object = {
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }

  const classes: object = {
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
      'ghost': {
        ...defaultStylesContainer,
        backgroundColor: Colors.darkGray
      },
      'ghost-inverse': {
        ...defaultStylesContainer,
        borderWidth: 1,
        borderColor: Colors.darkGray
      }
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
        height: 55
      }
    },
    text: {
      'primary': {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold'
      },
      'primary-inverse': {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold'
      },
      'ghost': {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold'
      },
      'ghost-inverse': {
        color: Colors.darkGray,
        fontSize: 16,
        fontWeight: 'bold'
      }
    }
  }

  return StyleSheet.create({
    container: {
      ...classes.container[classType],
      ...classes.sizeContainer[size]
    },
    text: {
      ...classes.text[classType]
    }
  })
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

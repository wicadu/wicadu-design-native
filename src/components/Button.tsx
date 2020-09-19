import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import PropTypes, { InferProps } from 'prop-types'
import { Colors, Fonts } from '../constants'

const propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  inverse: PropTypes.bool,
  size: PropTypes.string,
  onPress: PropTypes.func.isRequired
}

interface DefaultProps {
  type?: string,
  size?: string,
  inverse?: boolean,
  disabled?: boolean,
  onPress?: () => void
}

const defaultProps: DefaultProps = {
  type: 'primary',
  size: 'large',
  inverse: false,
  onPress: () => {},
  disabled: false
}

type Props = InferProps<typeof propTypes>

function Button(props: Props & DefaultProps) {
  const generatedStyles = styles(props)

  const { title, onPress, disabled } = props

  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
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
        height: 50
      }
    },
    text: {
      'primary': {
        color: Colors.white,
        fontSize: Fonts.small
      },
      'primary-inverse': {
        color: Colors.primary,
        fontSize: Fonts.small
      },
      'ghost': {
        color: Colors.white,
        fontSize: Fonts.small
      },
      'ghost-inverse': {
        color: Colors.darkGray,
        fontSize: Fonts.small
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

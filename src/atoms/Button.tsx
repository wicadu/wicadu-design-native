import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

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
    <TouchableWithoutFeedback onPress={onPress}disabled={disabled}>
      <View style={generatedStyles.container}>
        <Text style={generatedStyles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = ({ type, size, inverse }: DefaultProps) => {
  const classType: string = `${type}${inverse ? '-inverse' : ''}`

  const defaultStylesContainer: object = {
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }

  const defaultStylesText: object = {
    fontFamily: 'Cabin_Bold',
    fontSize: 18
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
        ...defaultStylesText,
        color: Colors.white
      },
      'primary-inverse': {
        ...defaultStylesText,
        color: Colors.primary
      },
      'ghost': {
        ...defaultStylesText,
        color: Colors.white
      },
      'ghost-inverse': {
        ...defaultStylesText,
        color: Colors.darkGray
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

import React, { Fragment } from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.element,
  inverse: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired
}

const defaultProps: Props = {
  children: '',
  type: 'primary',
  icon: null,
  size: 'default',
  inverse: false,
  containerStyle: {},
  textStyle: {},
  onPress: () => {}
}

type Props = InferProps<typeof propTypes>

function Button(props: Props) {
  const generatedStyles = styles(props)

  const { children: title, icon, onPress, loading, disabled } = props

  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={loading || disabled}>
      <View style={generatedStyles.container}>
        {loading ? (
          <ActivityIndicator size='small' color={Colors.white} />
        ) : (
          <Fragment>
            <View><Text style={generatedStyles.text}>{title}</Text></View>{Boolean(icon) && <View style={generatedStyles.iconContainer}>{icon}</View>}
          </Fragment>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = ({ type, size, inverse, containerStyle, textStyle }: Props) => {
  const classType: string = `${type}${inverse ? '-inverse' : ''}`

  const defaultStylesContainer: object = {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }

  const defaultStylesText: object = {
    fontFamily: 'Cabin_Bold',
    fontSize: 18
  }

  const defaultSizeIconContainer: object = {
    position: 'absolute',
    right: 20
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
      },
      'link': {}
    },
    sizeContainer: {
      'default': {},
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
      },
      'link': {
        ...defaultStylesText,
        fontSize: 16,
        color: Colors.primary
      }
    },
    sizeIconContainer: {
      'default': {
        ...defaultSizeIconContainer
      },
      'large': {
        ...defaultSizeIconContainer
      }
    }
  }

  return StyleSheet.create({
    container: {
      ...classes.container[classType],
      ...classes.sizeContainer[size],
      ...containerStyle
    },
    text: {
      ...classes.text[classType],
      ...textStyle
    },
    iconContainer: {
      ...classes.sizeIconContainer[size]
    }
  })
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

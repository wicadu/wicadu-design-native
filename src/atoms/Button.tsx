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
          <ActivityIndicator size='small' color={generatedStyles.loading.color} />
        ) : (
          <Fragment>
            <View><Text style={generatedStyles.text}>{title}</Text></View>{Boolean(icon) && <View style={generatedStyles.iconContainer}>{icon}</View>}
          </Fragment>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = ({ type, size, inverse, containerStyle, textStyle, disabled }: Props) => {
  let classType: string = type

  if (inverse) classType += '-inverse'
  if (disabled) classType += '-disabled'

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

  const defaultLoading: object = {
    color: Colors.white
  }

  const classes: object = {
    container: {
      'primary': {
        backgroundColor: Colors.primary,
      },
      'primary-inverse': {
        borderWidth: 1,
        borderColor: Colors.primary
      },
      'light': {
        backgroundColor: Colors.white,
      },
      'light-inverse': {
        borderWidth: 1,
        borderColor: Colors.white
      },
      'ghost': {
        backgroundColor: Colors.darkGray
      },
      'ghost-inverse': {
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
        width: 200,
        height: 45
      },
      'large': {
        height: 55
      }
    },
    text: {
      'primary': {
        color: Colors.white
      },
      'primary-inverse': {
        color: Colors.primary
      },
      'light': {
        color: Colors.primary
      },
      'light-inverse': {
        color: Colors.white
      },
      'ghost': {
        color: Colors.white
      },
      'ghost-inverse': {
        color: Colors.darkGray
      },
      'link': {
        fontSize: 16,
        color: Colors.primary
      },
      'link-disabled': {
        fontSize: 16,
        color: Colors.gray
      }
    },
    sizeIconContainer: {
      'default': {
        ...defaultSizeIconContainer
      },
      'large': {
        ...defaultSizeIconContainer
      }
    },
    loading: {
      'primary': {
        color: Colors.white,
      },
      'link': {
        color: Colors.primary,
      },
      'link-disabled': {
        color: Colors.gray
      }
    }
  }

  return StyleSheet.create({
    container: {
      ...defaultStylesContainer,
      ...classes.container[classType],
      ...classes.sizeContainer[size],
      ...containerStyle
    },
    text: {
      ...defaultStylesText,
      ...classes.text[classType],
      ...textStyle
    },
    iconContainer: {
      ...classes.sizeIconContainer[size]
    },
    loading: {
      ...defaultLoading,
      ...classes.loading[classType]
    }
  })
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button

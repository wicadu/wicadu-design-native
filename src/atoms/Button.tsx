import React from 'react'
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
          <View style={generatedStyles.containerLoading}>
            <ActivityIndicator size='small' color={generatedStyles.loading.color} />
          </View>
        ) : (
          <View style={generatedStyles.textContainer}>
            <View><Text style={generatedStyles.text}>{title}</Text></View>{Boolean(icon) && <View style={generatedStyles.iconContainer}>{icon}</View>}
          </View>
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
    marginVertical: 10,
    paddingVertical: 7,
    paddingHorizontal: 10
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
      'primary-disabled': {
        backgroundColor: Colors.lightGray,
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
      'link': {
        paddingVertical: 0,
        paddingHorizontal: 0
      }
    },
    sizeContainer: {
      'default': {},
      'small': {
        minHeight: 30
      },
      'medium': {
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
      'primary-disabled': {
        color: Colors.white
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
        color: Colors.primary
      },
      'link-inverse': {
        color: Colors.white
      },
      'link-disabled': {
        color: Colors.gray
      }
    },
    sizeText: {
      'default': {
        fontSize: 18
      },
      'small': {
        fontSize: 16
      },
      'medium': {},
      'large': {
        fontSize: 18
      }
    },
    sizeIconContainer: {
      'default': {
        ...defaultSizeIconContainer
      },
      'small': {
        marginLeft: 5
      },
      'medium': {
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
    textContainer: {
      flexDirection: 'row'
    },
    text: {
      ...defaultStylesText,
      ...classes.text[classType],
      ...classes.sizeText[size],
      ...textStyle
    },
    iconContainer: {
      ...classes.sizeIconContainer[size]
    },
    containerLoading: {
      marginLeft: 5
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

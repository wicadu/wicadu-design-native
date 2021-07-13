import React from 'react'
import { StyleSheet, View, Text, Pressable, ActivityIndicator } from 'react-native'
import colors from '../constants/colors'
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
  onPress: PropTypes.func.isRequired,
  hitSlop: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
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

  const { children: title, icon, onPress, loading, disabled, hitSlop } = props

  return (
    <Pressable onPress={onPress} hitSlop={hitSlop} disabled={loading || disabled}>
      <View style={generatedStyles.container}>
        {loading ? (
          <View style={generatedStyles.containerLoading}>
            <ActivityIndicator size='small' color={generatedStyles.loading.color} />
          </View>
        ) : (
          <View style={generatedStyles.textContainer}>
            <Text style={generatedStyles.text}>{title}</Text>
            {Boolean(icon) && <View style={generatedStyles.iconContainer}>{icon}</View>}
          </View>
        )}
      </View>
    </Pressable>
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
    marginLeft: 10
  }

  const defaultLoading: object = {
    color: colors.NEUTRAL.DARK_WHITE
  }

  const classes: object = {
    container: {
      'primary': {
        backgroundColor: colors.MAIN.PRIMARY,
      },
      'primary-inverse': {
        borderWidth: 1,
        borderColor: colors.MAIN.PRIMARY
      },
      'primary-disabled': {
        backgroundColor: colors.NEUTRAL.LIGHT_GRAY,
      },
      'light': {
        backgroundColor: colors.NEUTRAL.DARK_WHITE,
      },
      'light-inverse': {
        borderWidth: 1,
        borderColor: colors.NEUTRAL.DARK_WHITE
      },
      'ghost': {
        backgroundColor: colors.NEUTRAL.DARK_GRAY
      },
      'ghost-inverse': {
        borderWidth: 1,
        borderColor: colors.NEUTRAL.DARK_GRAY
      },
      'link': {
        paddingVertical: 0,
        paddingHorizontal: 0
      },
      'dashed': {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: colors.MAIN.PRIMARY
      },
      'dashed-inverse': {
        backgroundColor: colors.MAIN.PRIMARY,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: colors.NEUTRAL.DARK_WHITE
      },
      'error': {
        backgroundColor: colors.FEEDBACK.ERROR,
      },
      'error-inverse': {
        borderWidth: 1,
        borderColor: colors.FEEDBACK.ERROR
      },
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
        color: colors.NEUTRAL.DARK_WHITE
      },
      'primary-inverse': {
        color: colors.MAIN.PRIMARY
      },
      'primary-disabled': {
        color: colors.NEUTRAL.DARK_WHITE
      },
      'light': {
        color: colors.MAIN.PRIMARY
      },
      'light-inverse': {
        color: colors.NEUTRAL.DARK_WHITE
      },
      'ghost': {
        color: colors.NEUTRAL.DARK_WHITE
      },
      'ghost-inverse': {
        color: colors.NEUTRAL.DARK_GRAY
      },
      'link': {
        color: colors.MAIN.PRIMARY
      },
      'link-inverse': {
        color: colors.NEUTRAL.DARK_WHITE
      },
      'link-disabled': {
        color: colors.NEUTRAL.GRAY
      },
      'dashed': {
        color: colors.MAIN.PRIMARY
      },
      'dashed-inverse': {
        color: colors.NEUTRAL.DARK_WHITE
      },
      'error': {
        color: colors.NEUTRAL.DARK_WHITE
      },
      'error-inverse': {
        color: colors.FEEDBACK.ERROR
      },
      'error-disabled': {
        color: colors.NEUTRAL.DARK_WHITE
      },
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
        color: colors.NEUTRAL.DARK_WHITE,
      },
      'link': {
        color: colors.MAIN.PRIMARY,
      },
      'link-disabled': {
        color: colors.NEUTRAL.GRAY
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
      flexDirection: 'row',
      alignItems: 'center'
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

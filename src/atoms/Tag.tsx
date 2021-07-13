import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import colors from '../constants/colors'

const propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error', 'primary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  inverse: PropTypes.bool,
  containerStyles: PropTypes.object
}

const defaultProps: Props = {
  message: '',
  type: 'primary',
  size: 'medium',
  containerStyles: {}
}

type Props = InferProps<typeof propTypes>

function Tag (props: Props) {
  const generatedStyles = styles(props)

  const { message } = props

  return (
    <View style={generatedStyles.container}>
      <Text style={generatedStyles.text}>{message}</Text>
    </View>
  )
}

const styles = ({ size, containerStyles, type, inverse }: Props) => {
  const sizes = {
    small: 12,
    medium: 16,
    large: 20
  }

  return StyleSheet.create({
    container: {
      backgroundColor: inverse ? colors.NEUTRAL.DARK_WHITE : colors[type],
      borderWidth: 1,
      borderColor: inverse ? colors[type] : 'transparent',
      borderRadius: 5,
      paddingVertical: 3,
      paddingHorizontal: 6,
      ...containerStyles
    },
    text: {
      color: inverse ? colors[type] : colors.NEUTRAL.DARK_WHITE,
    fontSize: sizes[size],
    }
  }) 
}

Tag.propTypes = propTypes
Tag.defaultProps = defaultProps

export default Tag

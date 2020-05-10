import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import Common from './common.styles'
import { Colors, Fonts } from '../../constants'

const propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  className: PropTypes.string,
}

type Props = InferProps<typeof propTypes>

function ButtonWrapper({ title, className, onPress }: Props) {
  return (
    <TouchableOpacity style={styles[className]} onPress={() => onPress()}>
      <Text style={styles[`${className}-text`]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  'primary-btn': {
    backgroundColor: Colors.primary,
    ...Common.primaryBtn
  },
  'primary-btn-text': {
    color: Colors.white,
    fontSize: Fonts.size14
  },
  'primary-btn-inverse': {
    borderWidth: 1,
    borderColor: Colors.primary,
    ...Common.primaryBtn
  },
  'primary-btn-inverse-text': {
    color: Colors.primary,
    fontSize: Fonts.size14
  },
})

ButtonWrapper.propTypes = propTypes

export default ButtonWrapper

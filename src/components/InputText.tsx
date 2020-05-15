import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { Colors } from '../constants'

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

function TextInputWrapper(props: Props) {
  const { label, error, className } = props

  return (
    <View style={styles[`${className}-wrapper`]}>
      { label && <Text style={styles[`${className}-label`]}>{label}</Text>}
      <TextInput style={styles[className]} {...props} />
      { error && <Text>This is required.</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  'input-auth-wrapper': {
    marginVertical: 30
  },
  'input-auth-label': {
    color: Colors.gray,
  },
  'input-auth': {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    color: Colors.lightGray,
    paddingTop: 7.5,
    paddingBottom: 5,
  },
  'input-auth-error': {

  }
})

TextInputWrapper.propTypes = propTypes

export default TextInputWrapper

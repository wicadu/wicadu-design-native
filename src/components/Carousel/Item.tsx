import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node
}

type Props = InferProps<typeof propTypes>

function Item ({ children, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 160,
  }
})

export default Item

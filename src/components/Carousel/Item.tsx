import React  from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
  onPress: PropTypes.func.isRequired
}

interface DefaultProps {
  onPress?: () => void
}

const defaultProps = {
  children: null,
  onPress: () => {}
}

type Props = InferProps<typeof propTypes>

function Item ({ children, onPress }: Props & DefaultProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 160
  }
})

Item.defaultProps = defaultProps

Item.propTypes = propTypes

export default Item

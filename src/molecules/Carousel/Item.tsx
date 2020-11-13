import React  from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func
}

interface DefaultProps {
  onPress: () => void
}

const defaultProps: DefaultProps = {
  onPress: () => {}
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
    minWidth: 100,
    minHeight: 100,
    margin: 10
  }
})

Item.defaultProps = defaultProps
Item.propTypes = propTypes

export default Item

import React, { useCallback } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  onPress: () => {}
}

function Item ({ id, children, onPress: rawOnPress }: Props) {
  const onPress = useCallback(() => rawOnPress(id), [rawOnPress, id])

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 100,
    minHeight: 100,
    margin: 10
  }
})

Item.defaultProps = defaultProps
Item.propTypes = propTypes

export default Item

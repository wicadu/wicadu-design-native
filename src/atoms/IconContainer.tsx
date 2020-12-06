import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  containerStyle: PropTypes.object,
  icon: PropTypes.node,
  onPress: PropTypes.func,
}

const defaultProps = {
  containerStyle: {},
  onPress () {}
}

type Props = InferProps<typeof propTypes>

function IconContainer ({ containerStyle, icon, ...props }: Props) {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TouchableWithoutFeedback style={styles.container} {...props}>{icon}</TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

IconContainer.propTypes = propTypes
IconContainer.defaultProps = defaultProps

export default IconContainer

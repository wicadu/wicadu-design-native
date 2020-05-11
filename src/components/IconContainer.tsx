import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  containerStyle: PropTypes.object,
  icon: PropTypes.node
}

const defaultProps = {
  containerStyle: {}
}

type Props = InferProps<typeof propTypes>

function IconContainer ({ containerStyle, icon }: Props) {
  return <View style={{ ...styles.container, ...containerStyle }}>{icon}</View>
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

IconContainer.propTypes = propTypes
IconContainer.defaultProps = defaultProps

export default IconContainer

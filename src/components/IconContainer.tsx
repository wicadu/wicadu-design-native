import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  containerStyle: PropTypes.object,
  icon: PropTypes.node,
  onPress: PropTypes.func
}

const defaultProps = {
  containerStyle: {},
  onPress: () => {}
}

type Props = InferProps<typeof propTypes>

function IconContainer ({ containerStyle, icon, onPress }: Props) {
  return <TouchableOpacity style={{ ...styles.container, ...containerStyle }} onPress={onPress}>{icon}</TouchableOpacity>
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

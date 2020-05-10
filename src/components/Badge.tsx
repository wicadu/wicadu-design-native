import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from '../constants'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  onPress: PropTypes.func
}

interface Props {
  children: PropTypes.ReactNodeLike
}

interface DefaultProps {
  count?: number
  onPress?: () => void
}

const defaultProps: DefaultProps = {
  count: 0,
  onPress: () => {}
}

function Badge ({ children, count, onPress }: Props & DefaultProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.count}>
        <Text style={styles.countNumber}>{count}</Text>
      </View>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.third,
    position: 'relative'
  },
  count: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    position: 'absolute',
    top: 0,
    right: 0
  },
  countNumber: {
    color: Colors.white
  }
})

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps

export default Badge

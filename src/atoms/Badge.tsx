import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

import { Colors } from '../constants'

const propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  onPress: PropTypes.func,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

interface Props {
  children: PropTypes.ReactNodeLike
}

interface DefaultProps {
  count?: number
  onPress?: () => void,
  size?: number
}

const defaultProps: DefaultProps = {
  count: 0,
  onPress: () => {},
  size: 50
}

function Badge (props: Props & DefaultProps) {
  const generatedStyles = styles(props)

  const { children, count, onPress } = props

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={generatedStyles.container}>
        <View style={generatedStyles.count}>
          <Text style={generatedStyles.countNumber}>{count}</Text>
        </View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = ({ size }: DefaultProps) => {
  return StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
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
      right: 0,
      zIndex: 5,
    },
    countNumber: {
      color: Colors.white
    }
  }) 
}

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps

export default Badge

import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  onPress: PropTypes.func,
  size: PropTypes.number.isRequired
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  count: 0,
  onPress: () => {},
  size: 50
}

function Badge (props: Props) {
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

const styles = ({ size }: Props) => {
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

import React from 'react'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import colors from '../constants/colors'
import Spin from './Spin'

const propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
  onPress: PropTypes.func,
  size: PropTypes.number.isRequired,
  loading: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  count: 0,
  onPress: () => {},
  size: 50,
  loading: false
}

function Badge (props: Props) {
  const generatedStyles = styles(props)

  const { children, count, loading, onPress } = props

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={generatedStyles.container}>
        <View style={generatedStyles.count}>
          {loading ? (
            <Spin size='very-small' />
          ) : (
            <Text style={generatedStyles.countNumber}>{count}</Text>
          )}
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
      backgroundColor: colors.MAIN.PRIMARY,
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 5,
    },
    countNumber: {
      color: colors.NEUTRAL.DARK_WHITE
    }
  }) 
}

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps

export default Badge

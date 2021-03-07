import React from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { AntDesign } from '@expo/vector-icons'

import Colors from '../constants/colors'

const sizes = {
  'very-small': 15,
  small: 35,
  medium: 50,
  large: 70
}

const propTypes = {
  size: PropTypes.oneOf(['very-small', 'small', 'medium', 'large'])
}

const defaultProps = {
  size: 'medium'
}

type Props = InferProps<typeof propTypes>

function Spin (props: Props) {
  const { size } = props

  const animatedSpin = new Animated.Value(0)
  const generatedStyles = styles(props)

  Animated.loop(Animated.timing(animatedSpin, {
    toValue: 100,
    duration: 1000,
  })).start()

  const rotate = animatedSpin.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    
  })
  
  return (
    <View style={generatedStyles.container}>
      <View style={generatedStyles.box}>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <AntDesign name='loading2' size={sizes?.[size]} color={Colors.lightGray} />
        </Animated.View>
      </View>
    </View>
  )
}

const styles = ({ size }: Props) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
      marginHorizontal: 15,
    },
    box: {
      width: sizes?.[size] + 1,
      height: sizes?.[size] + 1
    }
  })
}

Spin.propTypes = propTypes
Spin.defaultProps = defaultProps

export default Spin

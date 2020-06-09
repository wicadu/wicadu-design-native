import React, { useState, useCallback } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import { Colors, Fonts } from '../constants'

const propTypes = {
  number: PropTypes.number,
  onPress: PropTypes.func.isRequired
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  number: 0,
  onPress: () => {}
}


function Count({ number, onPress }: Props) {
  const [count, setCount] = useState(number || 0)

  const increment = useCallback(() => {
    setCount(count + 1)
    onPress(count + 1)
  }, [count])

  const decrement = useCallback(() => {
    setCount(count - 1)
    onPress(count - 1)
  }, [count])

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={decrement}>
        <View style={styles.button}>
          <Text style={styles.icon}>-</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text>{count}</Text>
      <TouchableWithoutFeedback onPress={increment}>
        <View style={styles.button}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 140,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    padding: 5,
  },
  button: {
    width: 40,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 7,
  },
  icon: {
    color: Colors.gray,
    fontSize: Fonts.large
  }
})

Count.propTypes = propTypes
Count.defaultProps = defaultProps

export default Count

import React, { useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { AntDesign } from '@expo/vector-icons'; 

import Typography from '../atoms/Typography'
import IconContainer from '../atoms/IconContainer' 
import Colors from '../constants/colors'

interface ICount {
  onChangeQuantity: (quantity: number) => void,
  quantity: number,
  addOrSubtractEach: number
}

const propTypes = {
  onChangeQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number,
  addOrSubtractEach: PropTypes.number
}

const defaultProps: ICount & Props = {
  onChangeQuantity(){},
  quantity: 0,
  addOrSubtractEach: 1
}

type Props = InferProps<typeof propTypes>

function Count(props: ICount & Props) {
  const { quantity, onChangeQuantity, addOrSubtractEach } = props

  return (
    <View style={styles.container}>
      <IconContainer
        icon={<AntDesign name="minus" size={14} color={Colors.lightGray} />}
        containerStyle={styles.button}
        onPress={() => onChangeQuantity(quantity - addOrSubtractEach)}
      />
      <Typography>{String(quantity)}</Typography>
      <IconContainer
        icon={<AntDesign name="plus" size={14} color={Colors.lightGray} />}
        containerStyle={styles.button}
        onPress={() => onChangeQuantity(quantity + addOrSubtractEach)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    minWidth: 100,
    maxWidth: 130,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    width: 35,
    height: 35,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 10,
  },
})

Count.propTypes = propTypes
Count.defaultProps = defaultProps

export default Count

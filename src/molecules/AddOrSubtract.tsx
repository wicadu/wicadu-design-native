import React, { useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Typography from '../atoms/Typography'
import IconContainer from '../atoms/IconContainer'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  initialQuantity: PropTypes.number.isRequired,
  onChangeQuantity: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number,
  minQuantity: PropTypes.number,
  disabled: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  initialQuantity: 0,
  onChangeQuantity () {},
  maxQuantity: 1,
  minQuantity: 0,
  disabled: false
}

enum ActionType {
  'ADD',
  'SUBTRACT'
}

function AddOrSubtract ({ onChangeQuantity, initialQuantity, maxQuantity, minQuantity, disabled }: Props) {
  const [ quantity, setQuantity ] = useState(initialQuantity)

  const onChange = useCallback((type: ActionType) => {
    let newQuantity: number = quantity

    if (type === ActionType.ADD) newQuantity += 1
    else newQuantity -= 1

    setQuantity(newQuantity)
    onChangeQuantity(newQuantity)
  }, [quantity, setQuantity, onChangeQuantity])

  const onAddQuantity = useCallback(() => {
    if (quantity >= maxQuantity || disabled) return

    onChange(ActionType.ADD)
  }, [onChange])

  const onSubtractQuantity = useCallback(() => {
    if (quantity <= minQuantity || disabled) return

    onChange(ActionType.SUBTRACT)
  }, [onChange])

  return (
    <View style={styles.container}>
      <IconContainer
        icon={<AntDesign name='minus' size={20} color={Colors.gray} />}
        containerStyle={styles.button}
        onPress={onSubtractQuantity}
      />
      <Typography type='title-4'>{String(quantity)}</Typography>
      <IconContainer
        icon={<AntDesign name='plus' size={20} color={Colors.gray} />}
        containerStyle={styles.button}
        onPress={onAddQuantity}
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
    borderColor: Colors.gray,
    borderRadius: 10
  }
})

AddOrSubtract.propTypes = propTypes
AddOrSubtract.defaultProps = defaultProps

export default AddOrSubtract

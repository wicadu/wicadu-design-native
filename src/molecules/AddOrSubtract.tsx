import React, { useState, useCallback } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { AntDesign } from '@expo/vector-icons'

import Typography from '../atoms/Typography'
import colors from '../constants/colors'

const propTypes = {
  initialQuantity: PropTypes.number.isRequired,
  onChangeQuantity: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number,
  minQuantity: PropTypes.number,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  containerStyles: PropTypes.object,
  inverse: PropTypes.bool,
  type: PropTypes.oneOf(['ghost', 'primary', 'error', 'warning']),
  alternate: PropTypes.shape({
    break: PropTypes.array,
    type: PropTypes.array
  })
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  initialQuantity: 0,
  onChangeQuantity () {},
  maxQuantity: 1,
  minQuantity: 0,
  disabled: false,
  loading: false,
  type: 'ghost'
}

enum ActionType {
  'ADD',
  'SUBTRACT'
}

function AddOrSubtract (props: Props) {
  const { onChangeQuantity, initialQuantity, maxQuantity, minQuantity, disabled, loading, inverse } = props

  const [quantity, setQuantity] = useState(initialQuantity)

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

  const generatedStyles = styles({ ...props, quantity })

  return (
    <View style={generatedStyles.container}>
      <AntDesign
        name='minus'
        size={18}
        style={generatedStyles.iconAction}
        onPress={onSubtractQuantity}
      />

      {loading ? (
        <ActivityIndicator size='small' color={inverse ? colors.NEUTRAL.DARK_GRAY : colors.NEUTRAL.DARK_WHITE} />
      ) : (
        <Typography type='title-4' style={generatedStyles.text}>{quantity}</Typography>
      )}

      <AntDesign
        name='plus'
        size={18}
        style={generatedStyles.iconAction}
        onPress={onAddQuantity}
      />
    </View>
  )
}

const styles = (props: Props) => {
  const { containerStyles, type, inverse, quantity, alternate } = props

  let classType: string = type

  if (Boolean(alternate)) {
    if (quantity <= alternate?.break?.[0]) {
      classType = alternate?.type?.[0]
    } else if (quantity >= alternate?.break?.[1]) {
      classType = alternate?.type?.[2]
    } else {
      classType = alternate?.type?.[1]
    }
  }

  const defaltContainerStyles: object = {
    height: 45,
    minWidth: 120,
    maxWidth: 130,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const defaultButtonStyles: object = {
    padding: 8,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 10,
  }
  
  const classes: object = {
    container: {
      'primary': {
        backgroundColor: colors.MAIN.PRIMARY,
      },
      'ghost': {
        backgroundColor: colors.NEUTRAL.DARK_GRAY,
      },
      'error': {
        backgroundColor: colors.FEEDBACK.ERROR,
      },
      'warning': {
        backgroundColor: colors.FEEDBACK.WARNING,
      }
    },
    iconAction: {
      'primary': {
        color: inverse ? colors.MAIN.PRIMARY : colors.NEUTRAL.DARK_WHITE,
        borderColor: colors.MAIN.PRIMARY
      },
      'ghost': {
        color: inverse ? colors.NEUTRAL.DARK_GRAY : colors.NEUTRAL.DARK_WHITE,
        borderColor: colors.NEUTRAL.DARK_GRAY
      },
      'error': {
        color: inverse ? colors.FEEDBACK.ERROR : colors.NEUTRAL.DARK_WHITE,
        borderColor: colors.FEEDBACK.ERROR
      },
      'warning': {
        color: inverse ? colors.FEEDBACK.WARNING : colors.NEUTRAL.DARK_WHITE,
        borderColor: colors.FEEDBACK.WARNING
      }
    },
    text: {
      'primary': {
        color: inverse ? colors.MAIN.PRIMARY : colors.NEUTRAL.DARK_WHITE,
      },
      'ghost': {
        color: inverse ? colors.NEUTRAL.DARK_GRAY : colors.NEUTRAL.DARK_WHITE,
      },
      'error': {
        color: inverse ? colors.FEEDBACK.ERROR : colors.NEUTRAL.DARK_WHITE,
      },
      'warning': {
        color: inverse ? colors.FEEDBACK.WARNING : colors.NEUTRAL.DARK_WHITE,
      }
    }
  }

  return StyleSheet.create({
    container: {
      ...defaltContainerStyles,
      ...(inverse ? {} : classes.container[classType]),
      ...containerStyles
    },
    iconAction: {
      ...defaultButtonStyles,
      ...classes.iconAction[classType],
    },
    text: {
      ...classes.text[classType],
    }
  })
}

AddOrSubtract.propTypes = propTypes
AddOrSubtract.defaultProps = defaultProps

export default AddOrSubtract

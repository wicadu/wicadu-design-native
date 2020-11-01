import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { Feather } from '@expo/vector-icons'
import Badge from '../atoms/Badge'

const propTypes = {
  count: PropTypes.number,
  onPress: PropTypes.func
}

const defaultProps = {
  count: 0,
  onPress: null
}

type Props = InferProps<typeof propTypes>

function Bag (props: Props) {
  const { count, onPress } = props

  return (
    <Badge count={count} onPress={onPress}>
      <Feather name='shopping-bag' size={24} color='black' />
    </Badge>
  )
}

Bag.propTypes = propTypes
Bag.defaultProps = defaultProps

export default Bag

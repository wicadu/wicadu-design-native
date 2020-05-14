import React from 'react'
import { Text } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import formatNumber from '../utils/formatNumber'

const propTypes = {
  amount: PropTypes.number.isRequired
}

type Props = InferProps<typeof propTypes>

function Price ({ amount }: Props) {
  return <Text>{formatNumber(amount)}</Text>
}

Price.propTypes = propTypes

export default Price


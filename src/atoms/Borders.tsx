import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View } from 'react-native'
import colors from '../constants/colors'

const propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
}

type Props = InferProps<typeof propTypes>

const defaultProps: Partial<Props> = {
  color: colors.white
}

function Borders ({ ...props }: Props) {
  const generatedStyles = styles(props)

  return (
    <View style={generatedStyles.container}>
      {props.children}
    </View>
  )
}

const styles = ({ color }: Props) => {
  return StyleSheet.create({
    container: {
      borderColor: color,
      borderWidth: 2,
      borderRadius: 15,
      padding: 15
    }
  })
}

Borders.propTypes = propTypes
Borders.defaultProps = defaultProps

export default Borders

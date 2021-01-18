import React from 'react'
import { StyleSheet, View } from 'react-native'
import Typography from '../atoms/Typography'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired
}

type Props = InferProps<typeof propTypes>

function Collapse ({ title }: Props) {
  return (
    <View style={styles.container}>
      <Typography type='title-4' style={styles.title}>{title}</Typography>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    marginBottom: 5
  }
})

export default Collapse

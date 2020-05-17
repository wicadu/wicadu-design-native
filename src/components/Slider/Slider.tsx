import React, { useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.node.isRequired
}

interface DefaultProps {
  totalItems: number
}

const defaultProps = {
  totalItems: 1
}

type Props = InferProps<typeof propTypes>

function Slider ({ totalItems, children }: Props & DefaultProps) {
  const [intervals, setIntervals] = useState(1)

  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
      showsHorizontalScrollIndicator={false}
      onContentSizeChange={() => setIntervals(Math.ceil(totalItems / 1))}
      scrollEventThrottle={200}
      pagingEnabled
      decelerationRate='fast'
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden'
  }
})

Slider.propTypes = propTypes
Slider.defaultProps = defaultProps

export default Slider

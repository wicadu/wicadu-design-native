import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import ViewPager from '@react-native-community/viewpager'

const propTypes = {
  children: PropTypes.node.isRequired
}

interface DefaultProps {
  initialPage: number,
  onScroll: (position: number) => void
}

const defaultProps = {
  onScroll: () => {}
}

type Props = InferProps<typeof propTypes>

const Slider = React.forwardRef(({ children, onScroll }: Props & DefaultProps, ref) => {
  return (
    <ViewPager
      ref={ref}
      style={styles.container}      
      onPageScroll={({ nativeEvent }) => onScroll(nativeEvent.position)}
    >
      {children}
    </ViewPager>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

Slider.propTypes = propTypes
Slider.defaultProps = defaultProps

export default Slider

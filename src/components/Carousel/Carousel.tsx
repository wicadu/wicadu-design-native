import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import { Fonts } from '../../constants'

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  headerRight: PropTypes.node
}

type Props = InferProps<typeof propTypes>

const Carousel = React.forwardRef(({ title, headerRight, children }: Props, ref) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {title && <Text style={styles.title}>{title}</Text>}
        {headerRight && headerRight}
      </View>
      <ScrollView ref={ref} horizontal= {true} showsHorizontalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  title: {
    fontSize: Fonts.size26,
  }
})

Carousel.propTypes = propTypes

export default Carousel

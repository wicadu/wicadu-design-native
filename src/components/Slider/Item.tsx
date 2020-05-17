import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Slide = ({ children }: any) => {
  return (
    <View style={styles.slide}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1
  }
})

export default Slide

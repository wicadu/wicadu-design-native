import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

function SearchBar (props: any) {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default SearchBar

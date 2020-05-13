import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onPress: PropTypes.func.isRequired
}

type Props = InferProps<typeof propTypes>

function Item ({ image, name, price, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      { image && <Image source={{ uri: image }} style={styles.image} /> }
      { name && <Text>{name}</Text> }
      { price && <Text>${price}</Text> }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 160
  },
  image: {
    height: '70%',
    width: 'auto',
    borderRadius: 15
  }
})

export default Item

import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import Item from './Item'
import { Fonts } from '../../constants'
import { Button } from 'wcado-design-native'

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

type Props = InferProps<typeof propTypes>

function Carousel ({ title, children }: Props) {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <Button
        title='See all'
        className='primary-btn-inverse'
        type='ghost'
        onPress={() => {}}
      />
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.itemList}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: Fonts.size22,
    fontWeight: 'bold'
  },
  itemList: {
    height: 260,
  }
})

Carousel.Item = Item

Carousel.propTypes = propTypes

export default Carousel

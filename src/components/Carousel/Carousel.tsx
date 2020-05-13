import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import Item from './Item'
import { Fonts } from '../../constants'
import Button from '../Button'

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

interface DefaultProps {
  seeAllItems?: boolean
}

const defaultProps = {
  seeAllItems: false
}

type Props = InferProps<typeof propTypes & DefaultProps>

function Carousel ({ title, seeAllItems, children }: Props) {
  return (
    <View>
      <View style={styles.header}>
      { title && <Text style={styles.title}>{title}</Text>}
      { seeAllItems &&
        <Button
          title='See all'
          type='ghost'
          size='small'
          onPress={() => {}}
          inverse
        />
      }
      </View>
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
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Fonts.size22,
  },
  itemList: {
    height: 260
  }
})

Carousel.propTypes = propTypes
Carousel.defaultProps = defaultProps
Carousel.Item = Item

export default Carousel

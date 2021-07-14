import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, StatusBar, Image, Dimensions } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import normalizeSize from '../utils/normalizeSize'

const propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired
}

const defaultProps = {
  image: {}
}

type Props = InferProps<typeof propTypes>

function Splash (props: Props) {
  const { image } = props

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      {image && <Image source={image} resizeMode='center' style={styles.image} /> }
    </SafeAreaView>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#056cf2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: normalizeSize(width)
  }
})

Splash.propTypes = propTypes
Splash.defaultProps = defaultProps

export default Splash

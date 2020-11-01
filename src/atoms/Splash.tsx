import React from 'react'
import { StyleSheet, StatusBar, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PropTypes, { InferProps } from 'prop-types'

import { screenWidth } from '../constants/utils'
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
      <Image
        source={image}
        resizeMode='center'
        style={styles.image}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#056cf2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: normalizeSize(screenWidth)
  }
})

Splash.propTypes = propTypes
Splash.defaultProps = defaultProps

export default Splash

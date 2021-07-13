import React, { useCallback, useEffect, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View, Dimensions, Pressable } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import Typography from '../atoms/Typography'
import colors from '../constants/colors'
import Fonts from '../constants/fonts'

const propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
  title: PropTypes.string,
  description: PropTypes.string,
  toActionCallback: PropTypes.func,
  autoClose: PropTypes.bool
}

const types = {
  'error': 'exclamationcircle',
  'info': 'infocirlceo',
  'success': 'checkcircle',
  'warning': 'warning'
}

type Props = InferProps<typeof propTypes>

function Snackbar (props: Props) {
  const { visible, type, title, description, toActionCallback, children, autoClose } = props

  const [isVisible, setIsVisible] = useState<boolean>(Boolean(visible))

  const handlePress = useCallback(() => {
    setIsVisible(false)

    if (toActionCallback) toActionCallback()
  }, [setIsVisible, toActionCallback])

  useEffect(() => {
    setIsVisible(Boolean(visible))

    if (autoClose && visible) setTimeout(() => handlePress(), 5000)
  }, [visible])

  if (!isVisible) return null

  const generatedStyles = styles()

  return (
    <View style={generatedStyles.container}>
      {!type ? (
        <View>{children}</View>
      ): (
        <View style={generatedStyles.feedback}>
          <View style={generatedStyles.feedback}>
            <AntDesign name={types[type]} size={35} color={colors[type]} />
            <View style={generatedStyles.details}>
              <Typography style={generatedStyles.title} numberOfLines={1}>{title}</Typography>
              <Typography type='description' size={Fonts.f14} numberOfLines={2}>{description}</Typography>
            </View>
          </View>
          <Pressable onPress={handlePress} hitSlop={20}>
            <AntDesign name='close' size={14} color='black'  />
          </Pressable>
        </View>
      )}
    </View>
  )
}

const { width, height } = Dimensions.get('screen')

const styles = () => {
  const tenPercentOfTheScreen = (10 / 100) * height;

  return StyleSheet.create({
    container: {
      width: width - 30,
      minHeight: 60,
      padding: 8,
      marginHorizontal: 15,
      borderRadius: 5,
      position: 'absolute',
      bottom: tenPercentOfTheScreen,
      zIndex: 999,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 1
    },
    feedback: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    details: {
      marginHorizontal: 5,
      maxWidth: width - 120,
    },
    title: {
      fontSize: Fonts.f18,
      fontFamily: Fonts.CabinBold
    },
  })
}

Snackbar.propTypes = propTypes

export default Snackbar

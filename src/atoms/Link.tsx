import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import {
  Linking,
  Alert,
  Text,
  View,
  Platform,
  StyleSheet
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Colors from '../constants/colors'
import Fonts from '../constants/fonts'

const propTypes = {
  underline: PropTypes.bool,
  lineColor: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
  innerStyle: PropTypes.object,
  textStyle: PropTypes.object,
}

const defaultProps: (Props & DefaultProps) = {
  isPhoneNumber: false,
  underline: false,
  lineColor: Colors.primary,
  children: null,
  fontSize: Fonts.f16,
  color: Colors.primary,
  href: '',
  text: '',
  innerStyle: {},
  textStyle: {},
}

interface DefaultProps {
  isPhoneNumber: boolean,
  onPress: () => void,
  url: string,
}

type Props = InferProps<typeof propTypes>

function errorMessage(err: any) {
  if (err) {
    Alert.alert("Ups!", "Don't know how to open the URL")
  }
}

async function isSupported(url: string) {
  return await Linking.canOpenURL(url).catch(errorMessage)
}

const Link = (props: Props & DefaultProps) => {
  const generatedStyles = styles(props)

  async function onPressHandle() {
    const { url, isPhoneNumber, onPress } = props

    if (onPress) {
      onPress()
    } else {
      let _url = url

      if (isPhoneNumber) {
        _url = (Platform.OS === 'android'
          ? `tel:${_url}`
          : `telprompt:${_url}`
        ).replace(/\s+/, '')
      }

      const checked = await isSupported(_url)

      if (checked) {
        await Linking.openURL(_url).catch(errorMessage)
      }
    }
  }

  const { children, text } = props

  return (
    <TouchableWithoutFeedback accessible onPress={onPressHandle}>
      {children ? (
        <>{children}</>
      ) : (
        <View style={generatedStyles.container}>
          <Text
            accessibilityHint='Llamará un link externo'
            onPress={onPressHandle}
            style={generatedStyles.text}>
            {text}
          </Text>
        </View>
      )}
    </TouchableWithoutFeedback>
  )
}

const styles = (props: Props) => {
  const {
    innerStyle,
    textStyle,
    underline,
    lineColor,
    fontSize,
    color,
  } = props

  return StyleSheet.create({
    container: {
      height: fontSize * 1.4,
      justifyContent: 'center',
      textAlign: 'center',
      borderBottomWidth: underline ? 1 : 0,
      borderBottomColor: lineColor,
      borderStyle: 'solid',
      ...innerStyle,
    },
    text: {
      color: color,
      fontSize: fontSize,
      ...textStyle
    }
  })
}

Link.propTypes = propTypes
Link.defaultProps = defaultProps

export default Link

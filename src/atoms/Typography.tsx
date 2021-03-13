import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'title', 'title-2', 'title-3', 'title-4', 'description']),
  size: PropTypes.number,
  style: PropTypes.object,
  numberOfLines: PropTypes.number,
  ellipsizeMode: PropTypes.string,
  invertedColor: PropTypes.bool
}

const defaultProps: Props = {
  children: '',
  type: 'default',
  size: 18,
  style: {}
}

type Props = InferProps<typeof propTypes>

function Typography (props: Props) {
  const generatedStyles = styles(props)

  const { children } = props

  return <Text style={generatedStyles.text} numberOfLines={props.numberOfLines} ellipsizeMode={props.ellipsizeMode}>{children}</Text>
}

const styles = ({ type, size, style, invertedColor }: Props) => {
  const defaultStylesText: object = {
    fontFamily: 'Cabin_Regular',
    fontSize: size,
    color: invertedColor ? Colors.white : Colors.black
  }

  const defaultStylesTitleText: object = {
    fontFamily: 'Cabin_Bold'
  }

  const classes: object = {
    text: {
      'default': defaultStylesText,
      'title': {
        ...defaultStylesText,
        ...defaultStylesTitleText,
        fontSize: 26
      },
      'title-2': {
        ...defaultStylesText,
        ...defaultStylesTitleText,
        fontSize: 24
      },
      'title-3': {
        ...defaultStylesText,
        ...defaultStylesTitleText,
        fontSize: 22
      },
      'title-4': {
        ...defaultStylesText,
        ...defaultStylesTitleText,
        fontSize: 20
      },
      'description': {
        ...defaultStylesText,
        color: Colors.darkGray
      }
    }
  }

  return StyleSheet.create({
    text: {
      ...classes.text[type],
      ...style
    }
  })
}

Typography.propTypes = propTypes
Typography.defaultProps = defaultProps

export default Typography

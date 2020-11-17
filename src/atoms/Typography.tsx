import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'title', 'title-2', 'description']),
  size: PropTypes.number,
  style: PropTypes.object
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

  return <Text style={generatedStyles.text}>{children}</Text>
}

const styles = ({ type, size, style }: Props) => {
  const defaultStylesText: object = {
    fontFamily: 'Cabin_Regular',
    fontSize: size
  }

  const defaultStylesTitleText: object = {
    fontFamily: 'Cabin_Bold',
    color: Colors.black
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

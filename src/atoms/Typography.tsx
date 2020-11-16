import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'title', 'description']),
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

  const classes: object = {
    text: {
      'default': {},
      'title': {
        ...defaultStylesText,
        fontFamily: 'Cabin_Bold',
        fontSize: 26,
        color: Colors.black
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

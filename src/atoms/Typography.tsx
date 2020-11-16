import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['title']),
  size: PropTypes.number,
  styles: PropTypes.object
}

const defaultProps: Props = {
  children: '',
  type: 'title',
  size: 16,
  styles: {}
}

type Props = InferProps<typeof propTypes>

function Typography (props: Props) {
  const generatedStyles = styles(props)

  const { children } = props

  return <Text style={generatedStyles.text}>{children}</Text>
}

const styles = ({ type, size, styles }: Props) => {
  const defaultStylesText: object = {
    fontFamily: 'Cabin_Bold',
    fontSize: size
  }

  const classes: object = {
    text: {
      'title': {
        ...defaultStylesText,
        fontSize: 24,
        color: Colors.black
      }
    }
  }

  return StyleSheet.create({
    text: {
      ...classes.text[type],
      ...styles
    }
  })
}

Typography.propTypes = propTypes
Typography.defaultProps = defaultProps

export default Typography

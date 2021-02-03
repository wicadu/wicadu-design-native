import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View } from 'react-native'
import Radio from '../atoms/Radio'
import Borders from '../atoms/Borders'
import Typography from '../atoms/Typography'
import colors from '../constants/colors'

const propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

function RadioBox ({ title, description, ...props }: Props) {
  const generatedStyles = styles(props)

  return (
    <Borders color={generatedStyles.borders.borderColor}>
      <View style={generatedStyles.containerRadio}>
        <Radio {...props} />
        <View style={generatedStyles.containerTitle}>
          {typeof(title) === 'string' ? <Typography type='title-4'>{title}</Typography> : title}
        </View>
      </View>
      <Typography type='description'>{description}</Typography>
    </Borders>
  )
}

const styles = (props: Props) => {
  const { error } = props

  return StyleSheet.create({
    borders: {
      borderColor: colors.primary
    },
    containerRadio: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    containerTitle: {
      marginBottom: 10
    }
  })
}

RadioBox.propTypes = propTypes

export default RadioBox

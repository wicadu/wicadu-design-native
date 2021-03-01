import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View } from 'react-native'
import RadioButton from '../molecules/RadioButton'
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
    <View style={generatedStyles.container}>
      <View style={generatedStyles.containerRadio}>
        <View style={generatedStyles.containerTitle}>
          {typeof(title) === 'string' ? <Typography type='title-4'>{title}</Typography> : title}
        </View>
        <RadioButton {...props} />
      </View>
      <Typography type='description'>{description}</Typography>
    </View>
  )
}

const styles = ({ disabled }: Props) => {
  return StyleSheet.create({
    container: {
      backgroundColor: disabled ? '#f8f8f8' : 'white',
      borderRadius: 15,
      padding: 15
    },
    containerRadio: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    containerTitle: {
      marginBottom: 10
    }
  })
}

RadioBox.propTypes = propTypes

export default RadioBox

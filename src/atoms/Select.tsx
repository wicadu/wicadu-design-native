import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View } from 'react-native'

import PickerSelect from 'react-native-picker-select'
import { AntDesign } from '@expo/vector-icons'

import Colors from '../constants/colors'
import Typography from './Typography'

const propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
}

const defaultProps: Props = {
  bgColor: 'white',
  value: '',
  placeholder: '',
  onChange () {},
  items: [],
}

type Props = InferProps<typeof propTypes>

function Icon () {
  return <AntDesign name="down" size={16} color={Colors.black} />
}

function Select(props: Props) {
  const generatedStyles = styles(props)

  const { value, onChange, label, error, items, placeholder } = props

  return (
    <View>
      {Boolean(label) && (
        <Typography type='title-4' style={generatedStyles.label}>
          {label}
        </Typography>
      )}
      <View style={generatedStyles.inputContainer}>
        <PickerSelect
          placeholder={{ inputLabel: placeholder }}
          value={value}
          onValueChange={onChange}
          items={items}
          Icon={Icon}
        />
      </View>
      <View style={generatedStyles.errorContainer}>
        {Boolean(error) && <Typography size={14} style={generatedStyles.error}>{error.message}</Typography>}
      </View>
    </View>
  )
}

const styles = (props: Props) => {
  const { error } = props

  return StyleSheet.create({
    inputContainer: {
      borderRadius: 5,
      backgroundColor: 'white',
      paddingVertical: 15,
      paddingHorizontal: 10,
      margin: 0,
      borderWidth: 1,
      borderColor: Boolean(error) ? Colors.error : 'transparent'
    },
    label: {
      fontSize: 14,
      marginBottom: 5
    },
    errorContainer: {
      height: 17,
      marginVertical: 5
    },
    error: {
      color: Colors.error,
      textAlign: 'right'
    }
  })
}

Select.propTypes = propTypes
Select.defaultProps = defaultProps

export default Select

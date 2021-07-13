import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View } from 'react-native'

import PickerSelect from 'react-native-picker-select'
import { AntDesign } from '@expo/vector-icons'

import colors from '../constants/colors'
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
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
  noError: PropTypes.bool,
  itemKey: PropTypes.string,
}

const defaultProps: Props = {
  value: '',
  placeholder: '',
  onChange () {},
  items: [],
  size: 'default',
  itemKey: 'id'
}

type Props = InferProps<typeof propTypes>

function Icon () {
  return <AntDesign name="down" size={16} color={colors.NEUTRAL.BLACK} />
}

function Select(props: Props) {
  const generatedStyles = styles(props)

  const { value, onChange, label, error, items, placeholder, itemKey, noError } = props

  return (
    <View>
      {Boolean(label) && (
        <Typography type='title-4' style={generatedStyles.label}>{String(label)}</Typography>
      )}
      <View style={generatedStyles.inputContainer}>
        <PickerSelect
          placeholder={{ inputLabel: placeholder, label: placeholder }}
          value={value}
          onValueChange={onChange}
          items={items}
          Icon={Icon}
          itemKey={itemKey}
          key='id'
        />
      </View>
      {!noError && (
        <View style={generatedStyles.FEEDBACK.ERRORContainer}>
          {Boolean(error) && (
            <Typography size={14} style={generatedStyles.FEEDBACK.ERROR}>{String(error.message)}</Typography>
          )}
        </View>
      )}
    </View>
  )
}

const styles = (props: Props) => {
  const { error, size } = props

  const sizes = {
    'default': {},
    'small': {
      height: 30,
      paddingVertical: 7,
    },
    'medium': {
      height: 45,
    },
    'large': {
      height: 55
    }
  }

  return StyleSheet.create({
    inputContainer: {
      borderRadius: 5,
      backgroundColor: 'white',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: Boolean(error) ? colors.FEEDBACK.ERROR : 'transparent',
      ...sizes[size]
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
      color: colors.FEEDBACK.ERROR,
      textAlign: 'right'
    }
  })
}

Select.propTypes = propTypes
Select.defaultProps = defaultProps

export default Select

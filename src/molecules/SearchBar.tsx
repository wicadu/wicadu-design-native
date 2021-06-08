import React, { useMemo, useCallback } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import IconContainer from '../atoms/IconContainer'
import Form from '../HOCs/Form'
import Input from '../molecules/Input'
import Colors from '../constants/colors'

const propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCompleteType: PropTypes.string,
  styleContainer: PropTypes.object,
  autoFocus: PropTypes.bool,
  noIcon: PropTypes.bool,
  border: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  styleContainer: {},
  onPress () {}
}

function SearchBar (props: Props) {
  const { name, onPress: rawOnPress, noIcon } = props

  const { control, setValue } = Form.useForm()
  const value = Form.useWatch({
    control,
    name,
    defaultValue: ''
  })

  const onClear = useCallback(() => {
    setValue(name, '')
  }, [setValue, name])

  const isEmpty = useMemo(() => !Boolean(value.length), [value])
  const iconType = useMemo(() => isEmpty ? 'search1': 'close', [isEmpty])
  const onPress = useMemo(() => isEmpty ? rawOnPress : onClear, [isEmpty, rawOnPress, onClear])

  const generatedStyles = styles(props)

  return (
    <View style={generatedStyles.container}>
      <Input {...props} name={name} placeholderTextColor={Colors.gray} style={generatedStyles.input} />

      {!noIcon && (
        <IconContainer
          containerStyle={generatedStyles.containerIcon}
          icon={<AntDesign name={iconType} size={18} color={Colors.gray} />}
          onPress={onPress}
        />
      )}
    </View>
  )
}

const styles = (props: Props) => {
  const { border, styleContainer } = props

  const borderStyles: object = {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.lightGray
  }
  
  return StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      ...styleContainer,
      ...(border ? borderStyles : {})
    },
    input: {
      fontSize: 18,
      paddingRight: 35,

    },
    containerIcon: {
      position: 'absolute',
      right: 0
    }
  })
}

SearchBar.propTypes = propTypes
SearchBar.defaultProps = defaultProps

export default SearchBar

import React, { useMemo, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import IconContainer from '../atoms/IconContainer'
import Form from '../hoc/Form'
import Input from '../molecules/Input'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  autoCompleteType: PropTypes.string,
  style: PropTypes.object,
  styleContainer: PropTypes.object,
  autoFocus: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  styleContainer: {},
  onPress () {}
}

function SearchBar ({ name, styleContainer, onPress: rawOnPress, ...props }: Props) {
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

  return (
    <View style={{ ...styles.container, ...styleContainer}}>
      <Input
        name={name}
        placeholderTextColor={Colors.gray}
        style={styles.input}
        {...props}
      />
      <IconContainer
        containerStyle={styles.containerIcon}
        icon={<AntDesign name={iconType} size={18} color={Colors.gray} />}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  input: {
    fontSize: 18,
    paddingRight: 35
  },
  containerIcon: {
    position: 'absolute',
    right: 0
  }
})

SearchBar.propTypes = propTypes
SearchBar.defaultProps = defaultProps

export default SearchBar

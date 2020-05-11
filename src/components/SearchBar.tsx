import React, { useRef, useState, useMemo, useCallback } from 'react'
import { TextInput, StyleSheet, View, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import IconContainer from './IconContainer'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  onPress: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  editable: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  onPress: () => {},
  style: {}
}

function SearchBar (props: any) {
  const input = useRef(null)
  const [ text, setText ] = useState<string>('')
  const onClear = useCallback(() => {
    setText('')
    input.current.clear()
  }, [input, setText])

  const icon = useMemo(() => text ? (
    <AntDesign name='close' size={18} color={Colors.gray} onPress={onClear} />
  ) : (
    <AntDesign name='search1' size={18} color={Colors.gray} onPress={props.onPress} />
  ), [text])

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={{ ...styles.input, ...props.style}}
        placeholderTextColor={Colors.gray}
        onTouchStart={props.onPress}
        onChangeText={text => setText(text)}
        ref={input}
      />
      <IconContainer containerStyle={styles.icon} icon={icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: Dimensions.get('window').width - 50 - 20,
    marginRight: 20
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    color: Colors.black,
    paddingLeft: 15,
    paddingRight: 50,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 50
  },
  icon: {
    position: 'absolute',
    right: 0,
    zIndex: 1
  }
})

SearchBar.propTypes = propTypes
SearchBar.defaultProps = defaultProps

export default SearchBar

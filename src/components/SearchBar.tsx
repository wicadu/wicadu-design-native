import React, { useRef, useState, useCallback } from 'react'
import { TextInput, StyleSheet, View, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import IconContainer from './IconContainer'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  onPress: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  styleContainer: PropTypes.object,
  editable: PropTypes.bool,
  autoFocus: PropTypes.bool,
  iconRight: PropTypes.node
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  onPress: () => {},
  style: {},
  styleContainer: {}
}

function SearchBar (props: Props) {
  const input = useRef(null)
  const [ text, setText ] = useState<string>('')

  const onChange = useCallback(text => {
    setText(text)
  }, [setText])

  const onClear = useCallback(() => {
    setText('')
    input.current.clear()
  }, [input, setText])

  const { styleContainer, style, onPress, iconRight, ...rest } = props

  return (
    <View style={{ ...styles.container, ...styleContainer}}>
      <TextInput
        {...rest}
        ref={input}
        style={{ ...styles.input, ...style}}
        placeholderTextColor={Colors.gray}
        onTouchStart={onPress}
        onChangeText={onChange}
      />
      <IconContainer
        containerStyle={styles.icon}
        icon={ iconRight ? iconRight : <AntDesign name={text ? 'close' : 'search1'} size={18} color={Colors.gray} />}
        onPress={text ? onClear : onPress}
      />      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    color: Colors.black,
    paddingLeft: 15,
    paddingRight: 50,
    borderWidth: 1,
    borderColor: Colors.lightGray,
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

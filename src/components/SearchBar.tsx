import React from 'react'
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
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={{ ...styles.input, ...props.style}}
        placeholderTextColor={Colors.gray}
        onTouchStart={props.onPress}
      />
      <IconContainer containerStyle={styles.icon} icon={<AntDesign name='search1' size={18} color={Colors.gray} onPress={props.onPress} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: Dimensions.get('window').width - 50,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 20,
    borderWidth: 0,
    paddingRight: 50
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

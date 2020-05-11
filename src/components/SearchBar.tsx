import React from 'react'
import { TextInput, StyleSheet, View, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import IconContainer from './IconContainer'
import Colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  onPress: PropTypes.func,
  placeholder: PropTypes.string,
  editable: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  onPress: () => {}
}

function SearchBar (props: any) {
  return (
    <View style={styles.container}>
      <IconContainer containerStyle={styles.icon} icon={<AntDesign name='search1' size={18} color={Colors.gray} onPress={props.onPress} />} />
      <TextInput
        {...props}
        style={styles.input}
        clearButtonMode='always'
        placeholderTextColor={Colors.gray}
        onTouchStart={props.onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative'
  },
  input: {
    width: Dimensions.get('window').width - 100,
    height: 50,
    fontSize: 20,
    borderWidth: 0,
    backgroundColor: 'white',
    paddingLeft: 50,
    borderColor: 'red',
    borderBottomWidth: 1
  },
  icon: {
    position: 'absolute',
    left: 0,
    zIndex: 1
  }
})

SearchBar.propTypes = propTypes
SearchBar.defaultProps = defaultProps

export default SearchBar

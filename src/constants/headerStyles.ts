import Colors from './colors'

const defaultStyles = (styles?: any) => ({
  backgroundColor: Colors.white,
  elevation: 0,
  shadowOpacity: 0,
  shadowColor: 'transparent',
  ...styles
})

const headerTitleContainerStyle = (args?: any) => ({ left: 0, right: 0, bottom: 0, top: 5, ...args })

export default {
  defaultStyles,
  headerTitleContainerStyle,
}
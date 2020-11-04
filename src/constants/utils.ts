import { Dimensions } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const memoSizes = {}

export default {
  screenWidth,
  screenHeight,
  memoSizes
}

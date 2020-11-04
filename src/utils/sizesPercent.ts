import { PixelRatio } from 'react-native'
import Utils from '../constants/utils'

//Guideline sizes are based on standard ~3" screen mobile device
const guidelineBaseWidth = 320
const guidelineBaseHeight = 480

function moderateScale (size, factor = 0.5) {
  return size + (scale(size) - size) * factor
} 

function scale (size) {
  return (Utils.screenWidth / guidelineBaseWidth) * size
}

function verticalScale (size) {
  return (Utils.screenHeight / guidelineBaseHeight) * size
}

export default {
  widthPercent: (size: number) => {
    if (!Utils.memoSizes[`${size}-w`]) {
      const _size = PixelRatio.roundToNearestPixel(moderateScale(size))
      Utils.memoSizes[`${size}-w`] = size < _size ? size : _size
    }

    return Utils.memoSizes[`${size}-w`]
  },
  heightPercent: (size: number) => {
    if (!Utils.memoSizes[`${size}-h`]) {
      const _size = PixelRatio.roundToNearestPixel(verticalScale(size) - 0.7)
      Utils.memoSizes[`${size}-h`] = size < _size ? size : _size
    }
  
    return Utils.memoSizes[`${size}-h`]
  }
}

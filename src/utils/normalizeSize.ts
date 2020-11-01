import { PixelRatio } from 'react-native'
import { screenWidth } from '../constants/utils'

//Guideline sizes are based on standard ~3" screen mobile device
const guidelineBaseWidth = 320
// const guidelineBaseHeight = 480

const memoSizes = {}

const normalizeSize = (size) => {
  if (!memoSizes[size]) {
    const _size = Math.round(
      PixelRatio.roundToNearestPixel(
        ((screenWidth / guidelineBaseWidth) * size) /
          (PixelRatio.getFontScale() > 1.25
            ? PixelRatio.getFontScale() - 1.25
            : 1.26),
      ),
    )

    memoSizes[size] = _size
  }

  return memoSizes[size]
}

export default normalizeSize

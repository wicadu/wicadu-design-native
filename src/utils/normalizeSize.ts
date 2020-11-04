import { PixelRatio } from 'react-native'
import Utils from '../constants/utils'

//Guideline sizes are based on standard ~3" screen mobile device
const guidelineBaseWidth = 320

function normalizeSize(size) {
  if (!Utils.memoSizes[size]) {
    const _size = Math.round(
      PixelRatio.roundToNearestPixel(
        ((Utils.screenWidth / guidelineBaseWidth) * size) /
          (PixelRatio.getFontScale() > 1.25
            ? PixelRatio.getFontScale() - 1.25
            : 1.26),
      ),
    )

    Utils.memoSizes[size] = _size
  }

  return Utils.memoSizes[size]
}

export default normalizeSize

import React, { useCallback, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Pressable, StyleSheet, View } from 'react-native'

import Colors from '../constants/colors'

const propTypes = {
  onPress: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
}

type Props = InferProps<typeof propTypes>

function Toggle (props: Props) {
  const { isActive, onPress } = props

  const [active, setActive] = useState<boolean>(isActive)

  const handleToggle = useCallback(() => {
    setActive(!active)

    if (onPress) onPress(!active)
  }, [onPress, active, setActive])

  const generatedStyles = styles(active)

  return (
    <Pressable onPress={handleToggle} style={generatedStyles.container}>
      <View style={generatedStyles.circle} />
    </Pressable>
  )
}

const styles = (active: boolean) => {
  const stylesActive: object = {
    alignItems: 'flex-end',
    backgroundColor: Colors.primary
  }

  const stylesInactive: object = {
    alignItems: 'flex-start',
    backgroundColor: Colors.lightGray
  }

  return StyleSheet.create({
    container: {
      height: 30,
      width: 60,
      borderRadius: 15,
      justifyContent: 'center',
      ...(active ? stylesActive : stylesInactive)
    },
    circle: {
      width: 23,
      height: 23,
      backgroundColor: 'white',
      borderRadius: 50,
      margin: 5
    }
  })
}

export default Toggle

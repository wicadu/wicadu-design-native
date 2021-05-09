import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { StyleSheet, View, Modal as NativeModal } from 'react-native'

const propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

function Modal (props: Props) {
  const generatedStyles = styles(props)

  const { children, visible } = props

  return (
    <NativeModal animationType='slide' transparent visible={Boolean(visible)}>
      <View style={generatedStyles.backgroundScreen} />
      <View style={generatedStyles.container}>
        <View style={generatedStyles.modalContent}>{children}</View>
      </View>
    </NativeModal>
  )
}

const styles = (props: Props) => {
  return StyleSheet.create({
    backgroundScreen: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 15,
      paddingBottom: 32,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  })
}

Modal.propTypes = propTypes

export default Modal

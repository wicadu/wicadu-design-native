import React, { useCallback, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import Button from '../atoms/Button'
import Colors from '../constants/colors'
import Input from './Input'
import { Octicons } from '@expo/vector-icons'

function InputEditable ({ ...props }) {
  const { control } = useFormContext()
  const email = useWatch({
    control,
    name: props.name
  })

  const [ edited, setEdited ] = useState(true)

  const onEdit = useCallback(() => setEdited(false), [setEdited])

  return (
    <View style={styles.container}>
      <Input control={control} hidden={edited} {...props} />
      {edited && (
        <Button type='link'
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          icon={<Octicons name='pencil' size={20} color='black' />}
          onPress={onEdit}
        >
          {email}
        </Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10
  },
  buttonText: {
    fontSize: 20,
    color: Colors.black
  }
})

export default InputEditable

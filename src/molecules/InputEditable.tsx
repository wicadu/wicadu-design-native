import React, { useCallback, useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { View } from 'react-native'
import Button from '../atoms/Button'
import Input from './Input'

function InputEditable ({ ...props }) {
  const { control } = useFormContext()
  const email = useWatch({
    control,
    name: props.name
  })

  const [ editing, setEditing ] = useState(false)

  const onEdit = useCallback(() => setEditing(true), [setEditing])

  return (
    <View>
      {editing ? (
        <Input control={control} {...props} />
      ) : (
        <Button transparent
          title={email}
          onPress={onEdit}
        />
      )}
    </View>
  )
}

export default InputEditable

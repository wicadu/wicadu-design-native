import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import { AntDesign } from '@expo/vector-icons'

import colors from '../constants/colors'
import fonts from '../constants/fonts'
import IconContainer from '../atoms/IconContainer'
import Typography from '../atoms/Typography'

const propTypes = {
  items: PropTypes.array.isRequired,
  withoutExternalIcons: PropTypes.bool,
  noHorizontalSpaces: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

function Breadcrumb (props: Props) {
  const { withoutExternalIcons, items } = props

  const generatedStyles = styles(props)

  return (
    <View style={generatedStyles.container}>
      {!withoutExternalIcons && (
        <IconContainer
          icon={<AntDesign name='caretright' size={10} color={colors.NEUTRAL.DARK_GRAY} />}
          containerStyle={generatedStyles.iconStyles}
        />
      )}
      {items?.map(({ name, id }, index) => (
        <Fragment key={id}>
          <Typography type='description' size={fonts.F14}>{name}</Typography>
          {withoutExternalIcons && items?.length - 1 <= index ? null : (
            <IconContainer
              icon={<AntDesign name='caretright' size={10} color={colors.NEUTRAL.DARK_GRAY} />}
              containerStyle={generatedStyles.iconStyles}
            />
          )}
        </Fragment>
      ))}
    </View>
  )
}

const styles = (props: Props) => {
  const { noHorizontalSpaces } = props

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginHorizontal: noHorizontalSpaces ? 0 : 10
    },
    iconStyles: {
      width: 20,
      height: 15
    }
  })
}

Breadcrumb.propTypes = propTypes

export default Breadcrumb

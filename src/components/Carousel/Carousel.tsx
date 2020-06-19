import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import { Fonts } from '../../constants'

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  headerRight: PropTypes.node,
  horizontal: PropTypes.bool,
  containerStyles: PropTypes.object,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]) 
}

type Props = InferProps<typeof propTypes>

interface StylesProps {
  height: number | string,
}

const defaultProps: Props | StylesProps = {
  height: 'auto',
  horizontal: false
}

const Carousel = React.forwardRef((props: Props, ref) => {
  const generatedStyles = styles(props)

  const { title, horizontal, headerRight, children } = props

  return (
    <View style={generatedStyles.container}>
      <View style={generatedStyles.header}>
        {title && <Text style={generatedStyles.title}>{title}</Text>}
        {headerRight && headerRight}
      </View>
      <ScrollView
        ref={ref}
        horizontal={Boolean(horizontal)}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  )
})

const styles = ({ height }: StylesProps) => {
  const defaultStyles = {
    container: {
      flex: 1,
      marginBottom: 20,
      height,
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50
    },
    title: {
      fontSize: Fonts.huge,
    }
  }

  return StyleSheet.create(defaultStyles)
}

Carousel.propTypes = propTypes
Carousel.defaultProps = defaultProps

export default Carousel

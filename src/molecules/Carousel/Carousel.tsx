import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'

import fonts from '../../constants/fonts'

interface ICarousel {
  title: string,
  horizontal: boolean,
  containerStyles: object,
  height: number | string
}

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

const defaultProps: Props | ICarousel = {
  title: '',
  height: 'auto',
  horizontal: false,
  containerStyles: {}
}

const Carousel = React.forwardRef((props: ICarousel & Props, ref) => {
  const generatedStyles = styles(props)

  const { title, horizontal, headerRight, children, containerStyles } = props

  return (
    <View style={{ ...generatedStyles.container, ...containerStyles }}>
      {(title || headerRight) && (
        <View style={generatedStyles.header}>
          {title && <Text style={generatedStyles.title}>{title}</Text>}
          {headerRight && headerRight}
        </View>
      )}
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

const styles = (props: ICarousel) => {
  const { height } = props

  const defaultStyles = {
    container: {
      flex: 1,
      marginBottom: 20,
      height
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50
    },
    title: {
      fontSize: fonts.F16,
    }
  }

  return StyleSheet.create(defaultStyles)
}

Carousel.propTypes = propTypes
Carousel.defaultProps = defaultProps

export default Carousel

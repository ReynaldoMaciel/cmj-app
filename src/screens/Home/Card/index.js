import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
// import rnvi from 'react-native-vector-icons'
import Icon from 'react-native-dynamic-vector-icons'
import colors from '../../../constants/colors'

export default ({ text, number, iconFamily, iconName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.numberText}>{number}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon
          name={iconName}
          type={iconFamily}
          size={55}
          color={colors.lightblue}
        />
      </View>
    </View>
  )
}

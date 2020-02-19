import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../constants/colors'
import styles from './styles'
import NavigationService from '../../navigation/NavigationService'

export default ({ title, leftItem, rightItem, showBackButton }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        {showBackButton && (
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={NavigationService.goBack}
          >
            <Ionicons
              name="ios-arrow-back"
              size={28}
              color={colors.lightblue}
            />
          </TouchableOpacity>
        )}
        {leftItem}
        {rightItem}
      </View>
      {title && (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
    </View>
  )
}

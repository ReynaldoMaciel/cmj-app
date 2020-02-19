import React from 'react'
import { Text, SafeAreaView, View, ScrollView } from 'react-native'
import Header from '../../components/Header'
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import { deviceWidth } from '../../constants/device'

import Card from './Card'
import styles from './styles'

const Home = ({ navigation }) => {
  const data = [40, 30, 30, 22, 22, 16, 16, 10, 10, 4, 4, 0]
  const dates = [
    '22/10',
    '23/10',
    '24/10',
    '25/10',
    '26/10',
    '27/10',
    '28/10',
    '29/10',
    '30/10',
    '31/10',
    '01/11',
  ]
  const contentInset = { top: 20, bottom: 20 }
  return (
    <SafeAreaView>
      <Header title="Home" />
      <ScrollView contentContainerStyle={styles.container}>
        <Card
          number="3"
          text="Projetos concluídos nos últimos 6 meses"
          iconFamily="MaterialIcons"
          iconName="work"
        />
        <Card
          number="32"
          text="Atividades concluídas nos últimos 15 dias"
          iconFamily="Octicons"
          iconName="tasklist"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

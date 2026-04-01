/*
* File: HomeScreen.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('A program kiszámítja egy rombusz területét annak két átlója alapján.');
    console.log('Vámosi László Ádám, SZOFT II-N, 2026-04-01');
  }, []);
  
  return (
    <LinearGradient 
      style={styles.background} 
      colors={['skyblue', 'aqua']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >

      <ScrollView style={styles.container}>
        <Text style={styles.title}>A program kiszámítja egy rombusz területét annak két átlója alapján.</Text>

        <View>
          <CustomButton
            title="Rombusz"
            onPress={() => navigation.navigate('Rhombus')}
          />
        </View>

        <View>
          <CustomButton
            title="Névjegy"
            onPress={() => navigation.navigate('About')}
          />
        </View>

      </ScrollView>

    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'navy',
    textAlign: 'center',
  },
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
});

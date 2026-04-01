/*
* File: AboutScreen.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { ScrollView, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AboutScreen = ({ navigation }) => {
  return (
    <LinearGradient 
      style={styles.background} 
      colors={['skyblue', 'aqua']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >

      <ScrollView style={styles.container}>
        <Text style={styles.title}>Szerző: Vámosi László Ádám</Text>
        <Text style={styles.title}>Csoport: II-N</Text>
        <Text style={styles.title}>Készült: 2026-04-01</Text>
      </ScrollView>

    </LinearGradient>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'navy',
    marginBottom: 20,
  },
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
});

/*
* File: RhombusScreen.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { Image, Keyboard, ScrollView, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import { calcArea } from '../utils/rhombus';
import { LinearGradient } from 'expo-linear-gradient';

const RhombusScreen = ({ navigation }) => {
  const [eDiagonal, setEDiagonal] = useState('');
  const [fDiagonal, setFDiagonal] = useState('');
  const [area, setArea] = useState('');

  function startCalc() {
    console.log('Számítás...');
    console.log('e =', eDiagonal, 'm');
    console.log('f =', fDiagonal, 'm');

    Keyboard.dismiss();

    const result = calcArea(Number(eDiagonal), Number(fDiagonal));
    console.log('T =', result, 'm²');
    setArea(result.toFixed(2));
  };

  return (
    <LinearGradient 
      style={styles.background} 
      colors={['skyblue', 'aqua']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >

      <ScrollView style={styles.container}>
        <Text style={styles.title}>Rombusz területe</Text>

        <Input
          title="e átló hossza (m)"
          onChangeText={eDiagonal => setEDiagonal(eDiagonal.replace(/[^0-9.]/g, ''))}
          value={eDiagonal}
          keyboardType="decimal-pad"
        />

        <Input
          title="f átló hossza (m)"
          onChangeText={fDiagonal => setFDiagonal(fDiagonal.replace(/[^0-9.]/g, ''))}
          value={fDiagonal}
          keyboardType="decimal-pad"
        />

        <CustomButton
          title="Számít"
          onPress={() => startCalc()}
          disabled={
            !eDiagonal ||
            !fDiagonal ||
            isNaN(Number(eDiagonal)) ||
            isNaN(Number(fDiagonal))
          }
        />

        <Input
          title="Terület (m²)"
          value={area}
          editable={false}
          onChangeText={() => {}}
        />

        <Text style={styles.formula}>T = ½ e f</Text>
        <Image source={require('../assets/rhombus.gif')} style={styles.image} />
      </ScrollView>

    </LinearGradient>
  );
};

export default RhombusScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: 'navy',
  },
  image: {
    alignSelf: 'center',
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  formula: {
    fontSize: 20,
    marginTop: 10,
    color: 'navy',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

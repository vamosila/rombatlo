/*
* File: CustomButton.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const CustomButton = ({onPress, title, disabled}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={disabled}
      style={styles.wrapper}
    >

      <LinearGradient
        colors={disabled ? ['#c0cfff', '#7a7a9f', '#c0cfff'] : ['#0078D7', '#004A9F', '#0094FF']}
        style={[
            styles.button, 
            disabled && styles.buttonDisabled,
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>

    </TouchableHighlight>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },
  button: {
    padding: 5,
    borderRadius: 20,
  },
  buttonDisabled: {
    backgroundColor: 'gray',
    opacity: 0.5,
  },
  title: {
    fontSize: 24,
    color: 'azure',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

/*
* File: Input.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-04-01
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({title, onChangeText, value = '', keyboardType = 'default', editable = true}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        editable={editable}
      />

    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'navy',
    marginTop: 15,
  },
  input: {
    borderColor: 'navy',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'azure',
    fontSize: 24,
  },
});

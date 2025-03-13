import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos 
import Exemplo01 from './src/exemplo/exemplo-01';

//Atividades

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01/>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    //alignItems: 'center',
    //justifyContent: 'center',
    //marginTop: Constants.statusBarHeight,
    padding:8,
    paddingBlock: Constants.statusBarHeight,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos 
import Exemplo01 from './src/exemplo/exemplo-01';
import Exemplo02 from './src/exemplo/exemplo-02';
import Exemplo03 from './src/exemplo/exemplo-03';
import Exemplo04 from './src/exemplo/exemplo-04';
import Exemplo05 from './src/exemplo/exemplo-05';

//Atividades

import Atividade01 from './src/atividade/atividade-01';
import Atividade02 from './src/atividade/atividade-02';
import Atividade03 from './src/atividade/atividade-03';
import Atividade04 from './src/atividade/atividade-04';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo05/>
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

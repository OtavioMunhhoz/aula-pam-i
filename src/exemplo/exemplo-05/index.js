import { useState } from 'react';
import { View,Text, TextInput } from 'react-native';
import styles from './styles';

function Exemplo05 () {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 5</Text>
            <Text style={styles.texto}>Calculadora Básica</Text>

            <Text style={styles.txtLabel}> 1° Número</Text>
            <TextInput style={styles.txtEntrada} />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.txtLabel}> 2° Número</Text>
            <TextInput style={styles.txtEntrada} />



        </View>
     )
}

export default Exemplo05;
import { useState } from 'react';
import { View,Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Exemplo05 () {

    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [total, setTotal] = useState('');

    function Soma() {
        const conta = setTotal(parseInt(n1) + parseInt(n2));
        setTotal(conta.toString());
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 5</Text>
            <Text style={styles.texto}>Calculadora Básica</Text>

            <Text style={styles.txtLabel}> 1° Número</Text>
            <TextInput style={styles.txtEntrada}
                    onChangeText={ (entrada) => setN1(entrada)}
                    value={n1}
            />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.txtLabel}> 2° Número</Text>
            <TextInput style={styles.txtEntrada} 
                onChangeText={ (entrada) => setN2(entrada)}
                value={n2}
            />

            <Text style={styles.textLabel}> Total </Text>
            <TextInput style={styles.txtEntrada}
                editable={false}
                value={total}
            />

                <TouchableOpacity style={styles.button} onPress={() => Soma()}>
                <Text style={styles.textButton}> + </Text>
            </TouchableOpacity>



        </View>
     )
}

export default Exemplo05;
import { useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03 () {

    const [numero, setNumero ] = useState(0);

    function handleIncrementa() {
        setNumero(numero+1)
    }
    function handleIncrementa1() {
        setNumero(numero-1)
    }
    function handleZerar() {
        setNumero(0)
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

        <View style={styles.container1}>
           <Text style={styles.valor}>{numero}</Text>
           <TouchableOpacity style={styles.botao1} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.botao2} onPress={handleIncrementa1}>
                <Text style={styles.txtBotao}>-1</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.botao} onPress={handleZerar}>
                <Text style={styles.txtBotao}>ZERAR</Text>
           </TouchableOpacity>
           </View>


        </View>
     )
}

export default Atividade03;
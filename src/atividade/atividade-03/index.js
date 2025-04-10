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
           
           <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+</Text>
           </TouchableOpacity>

           <Text style={styles.valor}>{numero}</Text>

           <TouchableOpacity style={styles.botao} onPress={handleIncrementa1}>
                <Text style={styles.txtBotao}>-</Text>
           </TouchableOpacity>

           </View>
           <TouchableOpacity style={styles.botaoZerar} onPress={handleZerar}>
                <Text style={styles.txtBotao}>ZERAR</Text>
           </TouchableOpacity>


        </View>
     )
}

export default Atividade03;
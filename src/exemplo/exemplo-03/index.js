import { useState} from 'react';
import { View,Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo03 () {

    const [numero, setNumero ] = useState(0);

    function handleIncrementa() {
        setNumero(numero+1)
    }

   

        function handleExibeBbotao () {
            Alert.alert(
                'Alerta, alguém clicou no botão!!');
        }

        const handleExibeBbotao2 = () =>{
            Alert.alert('Alerta',
                'alguém clicou no botão!!',
            [
                {
                    text: 'Sim',
                    onPress: () => Alert.alert('Mensagem', 'Clicou em sim'),
                    style: 'default',
                },

                {
                    text: 'Não',
                    onPress: () => Alert.alert('Clicou em não'),
                    style: 'default',
                },

                {
                    text: 'Cancelar',
                    onPress: () => Alert.alert('Clicou em cancelar'),
                    style: 'default',
                }
            ]);
        }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variaveis e State</Text>

            <View style={styles.botaoAlert}>
                <Button 
                    title='Não clique'
                    color={'darkslategrey'}
                    onPress={handleExibeBbotao2}
                />
            </View>

           <Text style={styles.valor}>{numero}</Text>
           <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                <Text style={styles.txtBotao}>+1</Text>
           </TouchableOpacity>


        </View>
     )
}

export default Exemplo03;
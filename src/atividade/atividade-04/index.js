import { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity,  } from 'react-native';

import styles from './styles';

function Atividade04 () {

    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [resultado, setResultado] = useState('');

    const mostrarNomeCompleto = () => {
        const nomeCompleto = `${nome} ${sobreNome}`;
        setResultado(nomeCompleto);
        setNome('');         // Limpa campo nome
        setSobreNome('');    // Limpa campo sobrenome
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 04</Text>

            <Text style={styles.subTitulo}>Insira o nome e sobrenome</Text>

            <TextInput 
                style={styles.txtInput} 
                placeholder="Nome"
                value={nome}
                onChangeText={(valor) => setNome(valor)} 
            />

            <TextInput 
                style={styles.txtInput} 
                placeholder="Sobrenome"
                value={sobreNome}
                onChangeText={(valor) => setSobreNome(valor)} 
            />

            <Text style={styles.texto}>{resultado}</Text>

            <TouchableOpacity 
                style={styles.botao}
                onPress={mostrarNomeCompleto}
            >
                <Text style={styles.txtBotao}>Visualizar nome completo</Text>
            </TouchableOpacity>

            
        </View>
    );
}

export default Atividade04;
import { useState } from 'react';
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade06() {
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [mensagem, setMensagem] = useState('');
    const mensErro = 'Valores inseridos de forma incorreta!';

    function calculaImc() {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum === 0) {
            setImc(null);
            setMensagem('Valores inseridos de forma incorreta!');
            return;
        }

        const tmpImc = pesoNum / (alturaNum * alturaNum);
        setImc(tmpImc);
        
        if (tmpImc < 18.5) {
            setMensagem('Abaixo do peso');
          } else if (tmpImc >= 18.5 && tmpImc <= 24.9) {
            setMensagem('Peso normal');
          } else if (tmpImc >= 25 && tmpImc <= 29.9) {
            setMensagem('Sobrepeso');
          } else if (tmpImc >= 30 && tmpImc <= 34.9) {
            setMensagem('Obesidade Grau I');
          } else if (tmpImc >= 35 && tmpImc <= 39.9) {
            setMensagem('Obesidade Grau II');
          } else if (tmpImc >= 40) {
            setMensagem('Obesidade Grau III (mórbida)');
          }
        
      
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>
                {imc ? imc.toFixed(2) : mensErro}
            </Text>

            <Text style={[styles.imc, styles.txtMensagem]}>{mensagem}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    );
}

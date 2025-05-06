import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade05() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [total, setTotal] = useState('');

  function calcular(operador) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
      setTotal('Erro');
      return;
    }

    let resultado = 0;
    switch (operador) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setTotal('Divisão por zero');
          return;
        }
        resultado = num1 / num2;
        break;
    }

    setTotal(resultado.toString());
  }

  function limpar() {
    setN1('');
    setN2('');
    setTotal('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <Text style={styles.texto}>Quatro Operações</Text>

      <Text style={styles.txtLabel}>1° Número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        value={n1}
        onChangeText={setN1}
      />

      <Text style={styles.txtLabel}>2° Número</Text>
      <TextInput
        style={styles.txtEntrada}
        keyboardType="numeric"
        value={n2}
        onChangeText={setN2}
      />

      <Text style={styles.textLabel}>Resultado</Text>
      <TextInput
        style={styles.txtEntrada}
        editable={false}
        value={total}
      />

    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <TouchableOpacity style={styles.button} onPress={() => calcular('+')}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => calcular('-')}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => calcular('*')}>
          <Text style={styles.textButton}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => calcular('/')}>
          <Text style={styles.textButton}>÷</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonLimpar} onPress={limpar}>
        <Text style={styles.textButton}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Atividade05;

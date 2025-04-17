import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  subTitulo: {
    textAlign:'center',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: '#555',
  },
  txtInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  txtBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: '#222',
  },
});

export default styles;

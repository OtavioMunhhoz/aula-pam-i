// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  txtLabel: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  txtEntrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  txtSaida: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
  textLabel: {
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#444',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;

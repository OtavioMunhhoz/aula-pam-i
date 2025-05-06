// styles.js
import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
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
    textAlign:'center',
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  txtEntrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textLabel: {
    textAlign:'center',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#444',
  },
  button: {
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor: '#4CAF50',
    marginTop:20,
    marginBottom:20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
   // marginHorizontal: 5,
    //margin:RFPercentage(1),
    //marginTop:RFPercentage(2)
    //alignItems: 'center',
    //minWidth:RFPercentage(1),
  },
  
  buttonLimpar: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    margin:RFPercentage(1),
    alignItems: 'center',
    minWidth: 10,
  },

  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

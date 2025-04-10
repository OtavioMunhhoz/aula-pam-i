import { StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
  
    titulo: {
      fontSize: RFPercentage(4),
      fontWeight: 'bold',
      color: '#999',
      marginBottom: 16,
      borderWidth: 3,
      padding:RFPercentage(1.5),
      borderRadius: 20,
      borderColor: 'grey',
    },
  
    container1: {
      borderWidth: 2,
      borderColor: 'grey',
      backgroundColor: '#fafafa',
      padding: RFPercentage(5),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      flexDirection:'row',
    },
  
    valor: {
      fontSize: RFPercentage(4.5),
      fontWeight: 'bold',
      marginHorizontal: 20,
      color: '#333',
    },
  
    botao: {
      backgroundColor: 'grey',
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
  
    botaoZerar: {
      backgroundColor: 'grey',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 30,
      marginTop: 20,
    },
  
    txtBotao: {
      color: '#fff',
      fontSize: RFPercentage(3),
      fontWeight: 'bold',
    },
  });

export default styles
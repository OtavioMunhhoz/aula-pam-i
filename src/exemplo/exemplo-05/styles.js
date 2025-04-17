import { StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, //ocupa 100% da tela
        backgroundColor: '#fafafa',
        borderRadius:5, //borda curvada
        padding:8,
        alignItems: 'center', //alinhamento horizontal - flexDirection collum
    },

    titulo:{
        fontSize:RFPercentage(3.5),
        borderWidth: 3,
        marginTop: 20, //margem acima do elemento
        marginBottom: 20,//margem abaixo do elemento,
        // padding: 8,
        width: '100%', // largura do objeto
        height: 65, // altura no objeto
        textAlign:'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamnento vertical do texto no container
        color:'darkslategrey', // cor do texto
        borderColor:'grey', // cor da borda
        borderRadius: 20, // arredondar a borda
    },

    texto:{
        fontSize:RFPercentage(2.2),
    },

})

export default styles
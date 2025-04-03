import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row", // Alinha os itens na horizontal (imagem + texto)
    alignItems: "center",
    borderWidth: 1,
    borderColor: "darkslategrey",
    borderRadius: 10,
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  imagem: {
    height: RFPercentage(20), 
    width: RFPercentage(12),  
    resizeMode: 'stretch',
    margin: RFPercentage(1),
}, 
  textContainer: {
    flex: 1, // Faz o texto ocupar o espaço restante
  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "darkslategrey",
    marginLeft: RFPercentage(1.5),
  },
  descricao: {
    fontSize: RFPercentage(2),
    color: "#222",
    textAlign: 'center'
  },
  valor: {
    fontSize: RFPercentage(2),
    color: '#fff', // Contraste com o fundo escuro
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'darkslategrey', // Fundo escuro para destaque
    padding: RFPercentage(1),
    borderRadius: RFPercentage(1),
    width: '80%',
    marginTop: RFPercentage(1),
    marginLeft: RFPercentage(1.5),
  },

});

export default styles;
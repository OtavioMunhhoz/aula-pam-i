import { View, Text } from "react-native";

import styles from "./styles";
import Card from "./card";

import demon from '../../../assets/demon.png';
import naruto from '../../../assets/naruto.png';
import onepiece from '../../../assets/onepiece.png';
import atck from '../../../assets/atck_on_titan.png'

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo2}>Atividade 02</Text>
      <Card 
        titulo2="Demom Slayer" 
        descricao="Um jogo emocionante sobre sobrevivência e laços humanos. R$100,00" 
        img={demon} 
      />
      <Card 
        titulo2="Naruto" 
        descricao="Ação e terror em uma jornada contra o bioterrorismo. R$70,00" 
        img={naruto} 
      />
      <Card 
        titulo2="One Piece" 
        descricao="Um épico do velho oeste com ação e uma história inesquecível. R$150,00" 
        img={onepiece} 
      />
      <Card 
        titulo2="Attack on Titan" 
        descricao="Um épico do velho oeste com ação e uma história inesquecível. R$150,00" 
        img={atck} 
      />
    </View>
  );
}

export default Atividade02;
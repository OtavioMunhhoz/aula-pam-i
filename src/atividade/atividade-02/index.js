import { View, Text, } from "react-native";

import styles from "./styles";
import Card from "./card";

import demon from '../../../assets/demon.png';
import naruto from '../../../assets/naruto.png';
import onepiece from '../../../assets/onepiece.png';
import atck from '../../../assets/atck_on_titan.png'

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MangaShop</Text>
      <Card 
        titulo="Demom Slayer" 
        descricao="Após sua família ser morta por demônios, Tanjiro Kamado se junta à corporação de caçadores de demônios para vingar sua família e salvar sua irmã Nezuko." 
        img={demon} 
        valor={'100,00'}
      />
      <Card 
        titulo="Naruto" 
        descricao="A história segue Naruto Uzumaki, um jovem ninja que busca e sonha em se tornar o Hokage, enfrentando desafios enquanto faz amigos e inimigos." 
        img={naruto} 
        valor={'120,00'}
      />
      <Card 
        titulo="One Piece" 
        descricao=" Luffy e sua tripulação de piratas navegam pelos mares em busca do maior tesouro de todos os tempos, o One Piece." 
        img={onepiece} 
        valor={'160,00'}
      />
      
    </View>
  );
}

export default Atividade02;

// <Card 
//       titulo="Attack on Titan" 
//        descricao="Em um mundo onde a humanidade é ameaçada por gigantes devoradores de homens, Eren Yeager e seus amigos lutam pela sobrevivência enquanto tentam desvendar os segredos por trás dos titãs." 
//        img={atck} 
//        valor={'99,00'}    />
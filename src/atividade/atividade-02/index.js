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
      <Text style={styles.titulo2}>MangaShop</Text>
      <Card 
        titulo2="Demom Slayer" 
        descricao="Após sua família ser massacrada por demônios, Tanjiro Kamado se junta à corporação de caçadores de demônios para vingar sua família e salvar sua irmã Nezuko. Preço: R$100,00" 
        img={demon} 
      />
      <Card 
        titulo2="Naruto" 
        descricao="A história segue Naruto Uzumaki, um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage, o líder de sua vila, enfrentando desafios internos e externos enquanto faz amigos e inimigos poderosos. Preço: R$70,00" 
        img={naruto} 
      />
      <Card 
        titulo2="One Piece" 
        descricao=" Luffy e sua tripulação de piratas navegam pelos mares em busca do maior tesouro de todos os tempos, o One Piece, enfrentando inimigos poderosos e descobrindo mistérios em cada ilha que visitam. Preço: R$150,00" 
        img={onepiece} 
      />
      <Card 
        titulo2="Attack on Titan" 
        descricao="Em um mundo onde a humanidade é ameaçada por gigantes devoradores de homens, Eren Yeager e seus amigos lutam pela sobrevivência enquanto tentam desvendar os segredos por trás dos titãs e a origem de sua existência. Preço: R$150,00" 
        img={atck} 
      />
    </View>
  );
}

export default Atividade02;
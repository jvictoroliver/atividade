import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { PLACES_DETAILS } from "../../dataset/places";
import styles from "./styles";

const Details = ({ route }) => {

  const { cidade } = route.params;
  const place = PLACES_DETAILS.find(
    place => place.name === cidade.name
  );

  console.log(cidade)

  return (
    <ScrollView 
      style={styles.container}
    >
      <Text
        style={styles.placeName}
      >{cidade.name}</Text>
      <View>
      <Image 
        style={styles.placeImage}
        source={{ uri: cidade.poster}} 
        resizeMode="cover"
      />
      </View>
    </ScrollView>
  );
}

export default Details;
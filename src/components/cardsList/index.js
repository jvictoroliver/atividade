import React from "react";
import { ScrollView } from "react-native";
import { PLACES } from "../../dataset/places";
import PlaceCard from "../placeCard";

const CardsList = ({ navigation }) => {

    const navegar = ( cidade ) => {
        navigation.navigate('Details', { cidade });
    }

    return (
        <ScrollView>
            {
                PLACES.map(
                    (place) => 
                    <PlaceCard 
                        key={place.name} 
                        place={place}
                        onPress={() => navegar( place )}
                    />
                )
            }
        </ScrollView>
    );
}

export default CardsList;

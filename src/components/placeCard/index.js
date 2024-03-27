import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/base';

const PlaceCard = (props) => {
    const { place, onPress } = props;

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>{place.name}</Card.Title>
                <Card.Divider />
                <Card.Image
                    style={{ padding: 0 }}
                    source={{
                        uri: place.poster,
                    }}
                />
                <Text style={{ marginBottom: 10 }}>
                    {place.name}/{place.state}
                </Text>
                <Button
                    icon={
                        <Icon
                            name="code"
                            color="#ffffff"
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                    }}
                    title="Detalhes"
                    onPress={onPress}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

export default PlaceCard;
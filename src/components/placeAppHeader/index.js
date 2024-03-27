import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from '@rneui/themed';

const PlaceAppHeader = () => {
    return (
        <Header
            centerComponent={{
                text: 'Header', style: styles.heading
            }}
        />
    );
}

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default PlaceAppHeader;
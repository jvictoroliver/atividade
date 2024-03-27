import React from 'react';
import CardsList from '../../components/cardsList';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <CardsList navigation={navigation} />
    </SafeAreaProvider>
  );
}

export default Home;

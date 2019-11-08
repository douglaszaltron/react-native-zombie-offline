import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

const ZombieStoreScreen = () => {
  const {navigate} = useNavigation();

  useEffect(() => {}, []);

  return (
    <View>
      <Button title="Listar" onPress={() => navigate('ZombieIndexScreen')} />
      <Text>Criar um novo zombie</Text>
    </View>
  );
};

ZombieStoreScreen.navigationOptions = () => {
  return {title: 'Novo zombie'};
};

export default ZombieStoreScreen;

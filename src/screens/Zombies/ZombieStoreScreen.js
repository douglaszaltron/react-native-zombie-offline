import React from 'react';
import {Alert, Button, Keyboard, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';

import * as Zombie from '../../stores/zombies/actions';

import Surface from '../../components/StyledSurface';
import TextInput from '../../components/StyledTextInput';

import useForm from '../../hooks/useForm';
import {Spacing} from '../../theme';
import Theme from '../../theme/Light';

const ZombieStoreScreen = () => {
  const dispatch = useDispatch();

  const {onChangeText, onError, values} = useForm({
    name: 'Baseball bat',
    defense_points: '100',
  });

  const onSubmit = async () => {
    try {
      Keyboard.dismiss();
      dispatch(Zombie.store(values));
    } catch (error) {
      onError(error);
      Alert.alert(null, 'Os dados fornecidos não são válidos.');
    }
  };

  return (
    <Surface style={styles.surface}>
      <View style={styles.group}>
        <TextInput
          blurOnSubmit={false}
          onChangeText={value => onChangeText('name', value)}
          onSubmitEditing={() => this.defense_points.focus()}
          placeholder={'Nome'}
          labelText={'Nome'}
          returnKeyType={'next'}
          style={styles.input}
          value={values.name}
        />
      </View>
      <View style={styles.group}>
        <TextInput
          refFocus={ref => (this.defense_points = ref)}
          placeholder={'Pontos de defesa'}
          labelText={'Pontos de defesa'}
          onChangeText={value => onChangeText('defense_points', value)}
          value={values.defense_points}
          returnKeyType={'next'}
          keyboardType={'numeric'}
          blurOnSubmit={false}
          onSubmitEditing={() => this.durability.focus()}
        />
      </View>
      <View style={styles.group}>
        <TextInput
          refFocus={ref => (this.durability = ref)}
          placeholder={'Durabilidade'}
          labelText={'Durabilidade'}
          onChangeText={value => onChangeText('durability', value)}
          value={values.durability}
          returnKeyType={'next'}
          keyboardType={'numeric'}
          blurOnSubmit={false}
          onSubmitEditing={() => this.price.focus()}
        />
      </View>
      <View style={styles.group}>
        <TextInput
          refFocus={ref => (this.price = ref)}
          placeholder={'Preço'}
          labelText={'Preço'}
          onChangeText={value => onChangeText('price', value)}
          value={values.price}
          returnKeyType={'done'}
          keyboardType={'numeric'}
          blurOnSubmit={false}
          onSubmitEditing={onSubmit}
        />
      </View>
      <View style={styles.group}>
        <Button color={Theme.primary} title={'Cadastrar'} onPress={onSubmit} />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  surface: {
    paddingVertical: Spacing.sm,
  },
  group: {
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.sm,
  },
});

ZombieStoreScreen.navigationOptions = () => {
  return {title: 'Novo zombie'};
};

export default ZombieStoreScreen;

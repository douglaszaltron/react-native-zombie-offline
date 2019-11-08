import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {useDatabase} from '@nozbe/watermelondb/hooks';

import Surface from '../../containers/Surface';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Divider = () => <View style={styles.divider} />;

const ZombieIndexScreen = () => {
  const {navigate} = useNavigation();
  // const database = useDatabase();

  useEffect(() => {}, []);

  return (
    <Surface>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {}}>
            <Item title={item.title} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={item => item.id}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, 0.20)',
    marginLeft: 16,
  },
});

ZombieIndexScreen.navigationOptions = () => {
  return {title: 'Zombies'};
};

export default ZombieIndexScreen;

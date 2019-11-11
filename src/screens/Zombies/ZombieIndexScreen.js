import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {synchronize} from '@nozbe/watermelondb/sync';
import Surface from '../../containers/Surface';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Divider = () => <View style={styles.divider} />;

const ZombieIndexScreen = () => {
  const [items] = useState();

  const database = useDatabase();

  useEffect(() => {
    sync();
  }, []);

  const sync = async () => {
    console.tron.log(database);
    await synchronize({
      database,
      pullChanges: async ({lastPulledAt}) => {
        const response = {
          changes: [
            {
              armors: {
                created: [
                  {
                    id: 1,
                    name: 'Baseball bats',
                    defense_points: 1,
                    durability: 100,
                    price: 1300,
                    created_at: 1573244196012,
                    updated_at: null,
                  },
                ],
                updated: [],
                deleted: [],
              },
            },
          ],
          timestamp: 1573243988389,
        };

        const {changes, timestamp} = response;

        return {changes, timestamp};
      },
      pushChanges: async ({changes, lastPulledAt}) => {
        const response = {changes: changes, timestamp: lastPulledAt};
        console.tron.log(response, 'offline');
      },
      sendCreatedAsUpdated: true,
    });
  };

  return (
    <Surface>
      <Button title="Atualizar" onPress={sync} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => {}}>
            <Item title={item.name} />
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

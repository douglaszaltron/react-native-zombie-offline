import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as Zombie from '../../stores/zombies/actions';

import Surface from '../../components/StyledSurface';
import Divider from '../../components/StyledDivider';
import ListItem from '../../components/StyledListItem';
import ListEmpty from '../../components/StyledListEmpty';
import Loading from '../../components/StyledLoading';
import HeaderButton from '../../components/StyledHeaderButton';

const ZombieIndexScreen = () => {
  const dispatch = useDispatch();
  const zombies = useSelector(value => value.zombies);

  const {isLoading, refreshing, items} = zombies;

  useEffect(() => {
    dispatch(Zombie.index());
  }, []);

  const onRefresh = () => {
    if (isLoading) {
      return;
    }

    dispatch(Zombie.refresh());
  };

  const onDelete = id => {
    if (isLoading) {
      return;
    }

    dispatch(Zombie.destroy(id));
  };

  const renderLoading = () => {
    return isLoading === true && <Loading />;
  };

  const renderListEmpty = () => {
    return isLoading === false && <ListEmpty title="Sem registros!" />;
  };

  const renderDivider = () => {
    return <Divider />;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <ListItem title={item.name} subtitle={item.id} />
      </TouchableOpacity>
    );
  };

  return (
    <Surface>
      <FlatList
        data={items}
        initialNumToRender={25}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={renderDivider}
        ListEmptyComponent={renderListEmpty}
        ListFooterComponent={renderLoading}
        onRefresh={onRefresh}
        refreshing={refreshing}
        renderItem={renderItem}
      />
    </Surface>
  );
};

ZombieIndexScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Zombies',
    headerRight: () => (
      <HeaderButton
        title={'NOVO'}
        onPress={() => navigation.navigate('ZombieStoreScreen')}
      />
    ),
  };
};

export default ZombieIndexScreen;

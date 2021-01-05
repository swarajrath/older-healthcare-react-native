import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../src/components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import TodoList from '../src/components/TodoList'
import colors from '../styles/Colors'


// const {user, logout} = useContext(AuthContext);
// <View style={styles.container}>
//   <Text style={styles.text}>Welcome {user.uid}</Text>
//   <FormButton buttonTitle="Logout" onPress={() => logout()} />
// </View>
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo<Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>

          <Text style={style.add}></Text>
        </View>

        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList data={data} keyExtractor={item => item.name} 
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          renderItem={({item}) => <TodoList list={list} />} />
        </View>
      </View>
    );

  }
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: 800,
    color: colors.black,
    paddingHorizontal: 64
  }, 
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8
  }
});

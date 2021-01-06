import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../src/components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import TodoList from '../src/components/TodoList'
import colors from '../styles/Colors'
import AddListModal from '../src/components/AddListModal'


// const {user, logout} = useContext(AuthContext);
// <View style={styles.container}>
//   <Text style={styles.text}>Welcome {user.uid}</Text>
//   <FormButton buttonTitle="Logout" onPress={() => logout()} />
// </View>
export default class ProfileScreen extends React.Component {

  state = {
    addTodoVisible: false
  }

  toggleAdddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible })
  }

  renderList = (list) => {
    return <TodoList list={list} updateList={this.updateList} />
  }

  addList = () => {
    this.setState({lists: [...this.state.lists, {...lists, id: this.state.lists.length + 1, todos: []}]})
  } 

  updateList = () => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAdddTodoModal()} >
          <AddListModal closeModal={() => this.toggleAdddTodoModal()} addList={this.addList} />
        </Modal>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo<Text style={{ fontWeight: "300", color: colors.blue }}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAdddTodoModal()}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>

          <Text style={style.add}></Text>
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList data={this.state.lists} keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps="always" />
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

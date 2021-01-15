import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../src/components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import TodoList from '../src/components/TodoList'
import colors from '../styles/Colors'
import AddListModal from '../src/components/AddListModal'
//import * as firebase from 'firebase';
import Fire from '../Fire'


// const {user, logout} = useContext(AuthContext);
// <View style={styles.container}>
//   <Text style={styles.text}>Welcome {user.uid}</Text>
//   <FormButton buttonTitle="Logout" onPress={() => logout()} />
// </View>
export default class ProfileScreen extends React.Component {

  static contextType = AuthContext

  state = {
    addTodoVisible: false,
    lists: [],
    user: {},
    loading: true
  }

  componentDidMount() {
    let firebase = new Fire((error, user) => {
      if (error) {
        return alert("Something went wrong..!")
      }

      firebase.getLists(lists => {
        this.setState({ lists, user }, () => {
          this.setState({ loading: false })
        })
      })

      this.setState({ user })
    })
    //let ref = firebase.firestore().collection('users').doc(this.userId).collection("lists")

  }

  toggleAdddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible })
  }

  renderList = (list) => {
    return <TodoList list={list} updateList={this.updateList} />
  }

  addList = () => {
    this.setState({ lists: [...this.state.lists, { ...lists, id: this.state.lists.length + 1, todos: [] }] })
  }

  updateList = () => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item
      })
    })
  }





  render() {

    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color={colors.blue} />
        </View>
      )
    }

     const { user, logout } = this.context

    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.addTodoVisible} onRequestClose={() => this.toggleAdddTodoModal()} >
          <AddListModal closeModal={() => this.toggleAdddTodoModal()} addList={this.addList} />
        </Modal>
        <View>
          <Text>User: {this.state.user.uid}</Text>
        </View>
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

          <Text style={styles.add}></Text>
        </View>

        <View style={{ height: 275, paddingLeft: 32 }}>
          <FlatList data={this.state.lists} keyExtractor={item => item.id.toString()}
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
    fontWeight: "800",
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

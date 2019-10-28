import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Keyboard, ActivityIndicator } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, ButtonContainer, Form, DeleteButton, Input, SubmitButton, List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText } from './styles'
import api from '../../services/api'


export default class Main extends Component {
    state = {
        newUser: '',
        users: [],
        loading: false
    }

    async componentDidMount() {
        const users = await AsyncStorage.getItem('users')
        if (users){
            this.setState({ users: JSON.parse(users)})
        }
    }

    componentDidUpdate(_, prevState){
        const { users } = this.state
        if(prevState.users != users) {
            AsyncStorage.setItem('users', JSON.stringify(users))
        }
    }


    handleAddUser = async () => {
        const { users, newUser } =  this.state
        this.setState({ loading: true })
        const response = await api.get(`/users/${newUser}`)

        const data = { 
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        }

        this.setState({
           users: [...users, data],
           newUser: '',
           loading: false 
        })

        Keyboard.dismiss()
    }

    handleNavigate = (user) => {
        const { navigation } = this.props

        navigation.navigate('User', { user })
    }

    handleDelete = (item) => {
        const userFiltered = this.state.users.filter(user => user!==item)
        this.setState({ users: userFiltered})
    }
 

    render() {
        const { users, newUser, loading } = this.state

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalie="none"
                        placeholder="Adicionar Usuário" 
                        placeholderTextColor="#999"
                        value={newUser}
                        onChangeText={ text => this.setState({ newUser: text })}
                        returnKeyType="send"
                        onSubmitEditing={this.handleAddUser}
                    />
                        <SubmitButton loading={loading} onPress={this.handleAddUser}>
                            { loading ? (<ActivityIndicator color="#FFF" />) : (<Icon name="add" size={20} color="#eee" /> )}
                        </SubmitButton>
                </Form>

                <List 
                    data={ users }
                    keyExtractor={ user => user.login }
                    renderItem={({ item }) => (
                        <User>
                            <Avatar source={{ uri: item.avatar}}/>
                            <Name>{ item.name }</Name> 
                            <Bio>{ item.bio } </Bio>

                            <ButtonContainer>
                                <ProfileButton onPress={() => this.handleNavigate(item)}>
                                    <ProfileButtonText>Ver Perfil</ProfileButtonText>
                                </ProfileButton>
                                <DeleteButton onPress={() => this.handleDelete(item)}>
                                    <Icon name="delete" size={25} color="#eee" />
                                </DeleteButton>
                            </ButtonContainer>
                        </User>
                    )}
                />
            </Container>
        )
    }
}

Main.navigationOptions = {
    title: 'Home'
}
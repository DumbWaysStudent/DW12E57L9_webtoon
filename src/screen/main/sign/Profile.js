import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Left, Right,Icon, Title, Thumbnail, View} from 'native-base';
import {Image, StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';

import StyleHome from './StyleHome';

export default class Profile extends Component {
  constructor(){
    super() 
    this.state = {
        data : {name : ""},    
        image: { uri : 'https://www.w3schools.com/howto/img_avatar.png'}
    }
  }
  render() {
    const{navigate} = this.props.navigation
    return (
      <Container style={{backgroundColor:'white'}}>
        <Header style={{backgroundColor:'#E3E3E3'}}>
            <Left>
                <Title style={{color:'#676767'}}>Profile</Title>
            </Left>
        
            <Right>
                <Icon name="md-create" onPress={()=>{navigate('EditProfile', {data:this.state.data.name, image:this.state.image.uri})}} style={StyleHome.iconProfile}/>
            </Right>
        </Header>
        <Content>
        <SafeAreaView>
            <Image source={{uri:this.state.image.uri}} style={StyleHome.profileImgProfile} />
            <Text style={StyleHome.textProfile1}>{}</Text>
        </SafeAreaView>
        <SafeAreaView style={{marginVertical:30}}>
           <Button onPress={()=>{this.props.navigation.navigate('AddCreation')}}style={StyleHome.textProfile}>
               <Text style={StyleHome.textProfile3}>
                    My webtoon creation
               </Text>
           </Button>

           <Button onPress={()=>{navigate('Guest')}} style={StyleHome.btnProfile}>
               <Text style={{color:'white'}}>
                    Logout
               </Text>
           </Button>
        </SafeAreaView>
        
        </Content>
      </Container>
    );
  }
}

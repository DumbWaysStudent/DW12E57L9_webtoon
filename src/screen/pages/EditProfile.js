import React, { Component } from 'react';
import { Container, Content, Header, Left, Right,Icon, Title, Item, View, Input} from 'native-base';
import {Image, StyleSheet,SafeAreaView} from 'react-native';
import  ImagePicker  from 'react-native-image-picker'

export default class EditProfile extends Component {
    constructor() {
        super() 
        this.state = {
            data : {name : "user"},
            image: { uri : 'https://www.w3schools.com/howto/img_avatar.png'}
        }
    }

    handleChoosePhoto = () => {
        const options = {
            title: 'Choose Photo',
            customButtons: [],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              let tmpPhoto = {
                uri: response.uri,
                type: response.type,
                name: response.fileName,
              };
              const source = tmpPhoto;
              this.setState({
                image: source
              });
            } 
          });
      };

    render() {
        return (
            <Container style={{backgroundColor:'white'}}>
            <Header style={{backgroundColor:'#E3E3E3'}}>
                <Left>
                    <Title style={{color:'#676767'}}>Edit Profile</Title>
                </Left>
            
                <Right>
                    <Icon name="md-checkmark" onPress={()=>{this.props.navigation.navigate('Profile')}} style={styles.icon}/>
                </Right>
            </Header>
            <Content>
            <SafeAreaView style={{alignItems:'center'}}>
                <Image style={styles.profileImg} source={{uri:this.state.image.uri}}/>   
                <Icon style={styles.icon1} onPress={this.handleChoosePhoto} name="camera"/>
            </SafeAreaView>
            <SafeAreaView style={{marginVertical:15}}>
                <View style={{alignItems : "center"}}>
                    <Item>
                        <Input style={styles.input}
                        onChangeText={text => this.setState({data:{...this.state.data, name:text}})}
                        value={this.state.data.name}
                        />
                    </Item>
                </View>
            </SafeAreaView>
            
            </Content>
          </Container>
        );
      }
    }
    
const styles = StyleSheet.create({
    title:{
        marginHorizontal:15,
        marginVertical:10,
        fontSize:25,
        fontWeight:"bold"
    },
    icon:{
      marginRight:10, 
      color:'#676767'
    },
    icon1:{
      marginTop:-50, 
      backgroundColor:'white',
      borderRadius:30, 
      padding:10, 
      marginRight:100
    },
    btnActive:{
        color:"#00D163"
    },
    profileImg: {
        marginVertical:15,
        alignSelf:'center',
        height: 200,
        width: 200,
        borderRadius: 100,
      },
      input:{
        textAlign:'center',
        marginHorizontal: 15,
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        color: '#000',
        borderRadius:15,
    }
})
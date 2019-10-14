import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon,Item, Input, Header,Right,Body, Left, Title} from 'native-base';
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'
import  ImagePicker  from 'react-native-image-picker'
import { styles } from '../../data/dummy';


export default class EditEps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add:'',
            tempImg:[{
                   name: 'Chapter 1',
                   uri: 'https://i2.wp.com/www.koreanesia.com/wp-content/uploads/2019/04/3-2-3.jpg?resize=480%2C853&ssl=1',
                   publish: '1 Oktober 2019'
                 }, {
                   name: 'Chapter 2',
                   uri: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
                   publish: '2 Oktober 2019'
                 },{
                   name: 'Chapter 3',
                   uri: 'https://i.pinimg.com/236x/12/f7/88/12f788e9fe9ca7a4b88a69f2e5a441ab.jpg',
                   publish: '3 Oktober 2019'
                 },{
                   name: 'Chapter 4',
                   uri: 'https://klikmanga.com/wp-content/uploads/2018/07/34686977_241449753107931_2583912772643323904_n-193x278.jpg',
                   publish: '4 Oktober 2019'
                   }]
        };
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
                var obj = {};
                obj['uri'] = source.uri;
                obj['name'] = source.name;

                this.state.tempImg.push(obj)
                this.setState({
                tempImg : this.state.tempImg
              });
            }
          });
      };

      handleDelete=(name)=>{
        const {tempImg}=this.state
        this.setState({
            tempImg:tempImg.filter(item => item !== item.name)
        })
      }

  render() {
    return (
      <Container style={{backgroundColor:'#F5DEB3'}}>
          <Header style={styless.header}>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()} >
                    <Icon  name="ios-arrow-round-back" style={{color:'#676767'}}/>
                </Button>
            </Left>
        
            <Body>
                <Title style={{color:'#676767'}}>Edit Chapter</Title>
            </Body>

            <Right>
                <Icon name="md-checkmark" onPress={()=>this.props.navigation.navigate('AddButtonPress')} style={styless.icon}/>
            </Right>

        </Header>
        <Content>
        <SafeAreaView>

        <View style={styless.view}>
            <Input 
                placeholder="Name"
                value={this.state.add}
                onChangeText={text=>this.setState({add:text})}            
            />
        </View>
        <FlatList
                data={this.state.tempImg}
                renderItem={({item}) =>
                    <View style={styless.view1}>
                        <View style={{flex:30}}>
                            <Image source={{uri:item.uri}} style={styless.img} />
                        </View>
                        
                        <View style={{flex:30}}>
                            <Text style={styless.text1}>{item.name}</Text>
                        </View>

                        <View style={styles.view2}>
                            <Button onPress={()=>alert('delete')} danger style={styless.alert}><Text>Remove</Text></Button>
                        </View>
                    </View> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        <TouchableOpacity
                style={[styless.buttonContainer,{marginTop:10}]}
                onPress={this.handleChoosePhoto}>
             <Text style={styless.text2}>+Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styless.buttonContainer, styless.btn]}
                onPress={()=>alert('Deleted')}>
             <Text style={styless.text3}>Delete Webtoon</Text>
            </TouchableOpacity>
        
        </Content>
      </Container>
    );
  }
}

const styless = StyleSheet.create({
    title:{
        marginHorizontal:15,
        marginVertical:10,
        fontSize:25,
        fontWeight:"bold"
    },
    btn:{
      backgroundColor:'red', 
      marginVertical:10
    },
    text1:{
      marginTop:25, 
      textAlign: 'left'
    },
    text2:{
      color: '#fff', 
      textAlign: 'center', 
      fontWeight: '700'
    },
    text3:{
      color: '#fff', 
      textAlign: 'center', 
      fontWeight: '700'
    },
    alert:{
      borderRadius:15, 
      padding:15
    },
    btnActive:{
        color:"#00D163"
    },
    buttonContainer:{
        borderRadius:15,
        backgroundColor: '#00D163',
        marginHorizontal:15,
        paddingVertical: 15
    },
    header:{
      backgroundColor:'#E3E3E3', 
      marginBottom:10
    },
    icon:{
      marginRight:10, 
      color:'#676767'
    },
    view:{
      backgroundColor:'white', 
      borderRadius:15, 
      marginLeft:15, 
      marginRight:15, 
      marginVertical:10
    },
    view1:{
      backgroundColor:'white',
      marginHorizontal:15, 
      marginVertical:5, 
      flex:3, 
      flexDirection:'row', 
      borderRadius:15
    },
    view2:{
      marginHorizontal:15, 
      marginTop:15
    },
    img:{
      width:80, 
      height:80, 
      padding:10, 
      borderRadius:15
    }
})
            

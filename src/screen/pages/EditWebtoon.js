import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon,Item, Input, Header,Right,Body, Left, Title} from 'native-base';
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'
import  ImagePicker  from 'react-native-image-picker'
import { styles } from '../../data/dummy';


export default class EditWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          banners : [{
            name: 'Chapter 1',
            url: 'https://i2.wp.com/www.koreanesia.com/wp-content/uploads/2019/04/3-2-3.jpg?resize=480%2C853&ssl=1',
            publish: '1 Oktober 2019'
          }, {
            name: 'Chapter 2',
            url: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
            publish: '2 Oktober 2019'
          },{
            name: 'Chapter 3',
            url: 'https://i.pinimg.com/236x/12/f7/88/12f788e9fe9ca7a4b88a69f2e5a441ab.jpg',
            publish: '3 Oktober 2019'
          },{
            name: 'Chapter 4',
            url: 'https://klikmanga.com/wp-content/uploads/2018/07/34686977_241449753107931_2583912772643323904_n-193x278.jpg',
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
                <Title style={{color:'#676767'}}>Edit Webtoon</Title>
            </Body>

            <Right>
                <Icon name="md-checkmark" onPress={()=>this.props.navigation.navigate('AddCreation')} style={styless.icon}/>
            </Right>

        </Header>
        <Content>
        <SafeAreaView>

        <View style={styless.view1}>
            <Input 
                placeholder="Name"
                value={this.state.add}
                onChangeText={text=>this.setState({add:text})}            
            />
        </View>
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={styles.view}>
                        <View>
                            <Image style={styles.img} source={{uri : item.url}}/>
                        </View>
                    
                        <View style={styles.view2}>
                            <Text style={styles.text1}>{item.title}</Text>
                            <View>
                                <Text style={styles.text2}> {item.publish}</Text>
                            </View>
                        </View>
                    </View> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>

            <TouchableOpacity
                style={[styless.buttonContainer,{marginTop:10}]}
                onPress={() => this.props.navigation.navigate('CreateEps')}>
             <Text style={styless.text3}>+Add Episode</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonContainer, {backgroundColor:'red', marginVertical:10}]}
                onPress={()=>alert('Deleted')}>
             <Text style={styless.text4}>Delete Webtoon</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
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
    header:{
      backgroundColor:'#E3E3E3', 
      marginBottom:10
    },
    view:{
      backgroundColor:'white',
      marginHorizontal:15, 
      marginVertical:5, 
      flex:2, 
      flexDirection:'row', 
      borderRadius:15
    },
    view1:{
      backgroundColor:'white', 
      borderRadius:15, 
      marginLeft:15, 
      marginRight:15, 
      marginVertical:10
    },
    view2:{
      marginHorizontal:15, 
      alignSelf:'center'
    },
    icon:{
      marginRight:10, 
      color:'#676767'
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
    text1:{
      fontSize:18, 
      fontWeight:'bold', 
      marginBottom:10
    },
    text2:{
      color:'#676767', 
      marginBottom:10
    },
    text3:{
      color: '#fff', 
      textAlign: 'center', 
      fontWeight: '700'
    },
    text4:{
      color: '#fff', 
      textAlign: 'center', 
      fontWeight: '700'
    },
    img:{
      width:100, 
      height:100, 
      padding:10, 
      borderRadius:15
    }
})

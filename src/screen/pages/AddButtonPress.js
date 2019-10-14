import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon,Left,Body,Right, Header, Title, Fab,Input} from 'native-base';
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native'
import { styles } from '../../data/dummy';


export default class AddButtonPress extends Component {
    constructor(props) {
        super(props);
        this.state = {
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://i.pinimg.com/236x/17/7a/98/177a9886500d8976318cead61edeef60.jpg',
          }, {
            title: 'Pasutri Gaje',
            url: 'https://i.pinimg.com/originals/b9/61/a3/b961a36cc511cdb9a2b5a3403d7bcead.jpg',
          }, {
            title: 'Young Mom',
            url: 'https://vignette.wikia.nocookie.net/webtoon/images/8/85/SAMPUL_Young_Mom.jpg/revision/latest?cb=20190104221450&path-prefix=id',
          },]
        };
      }

      add = () =>{
        if (this.state.add === "" || this.state.add === null){
            alert('Please fill the blank')
        } else {
            var obj = {};
            obj['title'] = this.state.add;
            obj['url'] =  'https://wallpaperaccess.com/full/24525.jpg';
            this.state.banners.push(obj)
            this.setState({banners:this.state.banners})
        }
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
                <Title style={{color:'#676767'}}>Create webtoon</Title>
            </Body>

            <Right>
                <Icon name="md-checkmark" onPress={this.add} style={styless.icon}/>
            </Right>

        </Header>
        <Content>
        <SafeAreaView>
            <View style={styles.view1}>
                <Input 
                    placeholder="New Title"
                    value={this.state.add}
                    onChangeText={text=>this.setState({add:text})}
                    
                />
            </View>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditEps')}>
                    <View style={styless.view2}>
                        <View>
                            <Image style={styless.img} source={{uri : item.url}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={styless.text1}>{item.title}</Text>
                        </View>
                    </View> 
                </TouchableOpacity>
                }                
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styless.buttonContainer}
                onPress={() => this.props.navigation.navigate('CreateEps')}>
             <Text style={styless.text2}>+Add Episode</Text>
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
    btnActive:{
        color:"#00D163"
    },
    icon:{
        marginRight:10, 
        color:'#676767'
    },
    view1:{
        backgroundColor:'white', 
        borderRadius:15, 
        marginLeft:15, 
        marginRight:15, 
        marginVertical:10
    },
    view2:{
        backgroundColor:'white',
        marginHorizontal:15, 
        marginVertical:5, 
        flex:2, 
        flexDirection:'row', 
        borderRadius:15
    },
    img:{
        width:100, 
        height:100, 
        padding:10, 
        borderRadius:15
    },
    text1:{
        fontSize:18, 
        fontWeight:'bold', 
        marginBottom:10
    },
    text2:{
        color: '#fff', 
        textAlign: 'center', 
        fontWeight: '700'
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
    },
    buttonContainer:{
        borderRadius:15,
        backgroundColor: '#00D163',
        marginHorizontal:15,
        paddingVertical: 15
    }
})
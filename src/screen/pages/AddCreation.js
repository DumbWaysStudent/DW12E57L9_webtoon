import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon,Left,Body, Header, Title, Fab} from 'native-base';
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native'


export default class AddCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          add:'',
          image:'https://wallpaperaccess.com/full/24525.jpg',
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://i.pinimg.com/236x/17/7a/98/177a9886500d8976318cead61edeef60.jpg',
            favorite:'10 Likes'
          }, {
            title: 'Pasutri Gaje',
            url: 'https://i.pinimg.com/originals/b9/61/a3/b961a36cc511cdb9a2b5a3403d7bcead.jpg',
            favorite:'1 Likes'
          }, {
            title: 'Young Mom',
            url: 'https://vignette.wikia.nocookie.net/webtoon/images/8/85/SAMPUL_Young_Mom.jpg/revision/latest?cb=20190104221450&path-prefix=id',
            favorite:'2 Likes'
          }]
        };
      }

  render() {
    return (
      <Container style={{backgroundColor:'#F5DEB3'}}>
         <Header style={styles.header}>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()} >
                    <Icon  name="ios-arrow-round-back" style={{color:'#676767'}}/>
                </Button>
            </Left>
        
            <Body>
                <Title style={{color:'#676767'}}>My WebToon Creation</Title>
            </Body>
        </Header>
        <Content>
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditWebtoon')}>
                    <View style={styles.view1}>
                        <View>
                            <Image style={styles.img} source={{uri : item.url}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={styles.text1}>{item.title}</Text>
                            <View>
                                <Text style={styles.text2}> {item.favorite}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        </Content>

        <Fab
            active={false}
            containerStyle={{ }}
            style={{ backgroundColor: 'green' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('AddButtonPress',{add:this.state.add, image:this.state.image, url:this.state.banners.url})}>
            <Icon type="FontAwesome" name="plus" />
          </Fab>

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
    btnActive:{
        color:"#00D163"
    },
    header:{
        backgroundColor:'#E3E3E3', 
        marginBottom:10
    },
    view1:{
        backgroundColor:'white',
        marginHorizontal:15, 
        marginVertical:5, 
        flex:2, 
        flexDirection:'row', 
        borderRadius:15
    },
    img:{
        width:100, height:100, 
        padding:10, 
        borderRadius:15
    },
    text1:{
        fontSize:18, 
        fontWeight:'bold', 
        marginBottom:10
    },
    text2:{
        color:'#676767', 
        marginBottom:10
    }
})
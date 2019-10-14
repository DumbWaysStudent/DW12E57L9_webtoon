import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Body, Left, Right,Icon, Title} from 'native-base';
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity, Share} from 'react-native';

export default class MoreDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          banners : [{
            title: 'Chapter 1',
            url: 'https://meispoiler.files.wordpress.com/2018/11/img_8021.jpg',
            publish: '1 Oktober 2019'
          }, {
            title: 'Chapter 2',
            url: 'https://meispoiler.files.wordpress.com/2018/11/11.jpg',
            publish: '2 Oktober 2019'
          }, {
            title: 'Chapter 3',
            url: 'https://meispoiler.files.wordpress.com/2018/11/3.jpg',
            publish: '3 Oktober 2019'
          },{
            title: 'Chapter 4',
            url: 'https://meispoiler.files.wordpress.com/2018/11/41.jpg',
            publish: '4 Oktober 2019'
          },{
            title: 'Chapter 5',
            url: 'https://meispoiler.files.wordpress.com/2018/11/51.jpg',
            publish: '5 Oktober 2019'
          }]
        };
      }

    onClick = () => Share.share({
        title: 'Title',
        message: 'Share Webtoon ', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'www.example.com',
        subject: 'Subject'
      })

  render() {
    return (
      <Container style={{backgroundColor:'#F5DEB3'}}>
        <Header style={{backgroundColor:'#E3E3E3'}}>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()} >
                    <Icon  name="ios-arrow-round-back" style={{color:'#676767'}}/>
                </Button>
            </Left>
        
            <Body>
                 <Title style={{color:'#676767'}}>{this.props.navigation.getParam('title')}</Title>
            </Body>
        
            <Right>
                <Icon name="share" onPress={()=>{this.onClick()}} style={styles.icon}/>
            </Right>
        </Header>
        <Content>
       
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={styles.viewDetail}>
                        <View>
                            <Image style={styles.imageDetail} source={{uri : item.url}}/>
                        </View>
                    </View> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
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
    btnActive:{
        color:"#00D163"
    },
    imageDetail:{
      width:330, 
      height:400, 
      padding:10
    },
    viewDetail:{
      backgroundColor:'white',
      marginHorizontal:15
    },
    icon:{
      marginRight:10, 
      color:'#676767'
    }
})
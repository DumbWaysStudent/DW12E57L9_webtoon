import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Body, Left, Right,Icon, Title} from 'native-base';
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity, Share} from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          banners : [{
            title: 'Chapter 1',
            url: 'https://i2.wp.com/www.koreanesia.com/wp-content/uploads/2019/04/3-2-3.jpg?resize=480%2C853&ssl=1',
            publish: '1 Oktober 2019'
          }, {
            title: 'Chapter 2',
            url: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-13-211947-wwwwebtoonscom-0f5ff5e345298954bf286ad981cd4c9c_600x400.png',
            publish: '2 Oktober 2019'
          }, {
            title: 'Chapter 3',
            url: 'data:image/jpeg;base64,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',
            publish: '3 Oktober 2019'
          },{
            title: 'Chapter 4',
            url: 'https://i.pinimg.com/236x/12/f7/88/12f788e9fe9ca7a4b88a69f2e5a441ab.jpg',
            publish: '4 Oktober 2019'
          },{
            title: 'Chapter 5',
            url: 'https://klikmanga.com/wp-content/uploads/2018/07/34686977_241449753107931_2583912772643323904_n-193x278.jpg',
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
    const {navigate} = this.props.navigation
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
            <Image style={styles.img} source={{uri : this.props.navigation.getParam('url')}}/>
        </SafeAreaView>

        <View>
            <Text style={styles.title}>Chapter</Text>
        </View>

        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{navigate('MoreDetail', {title:item.title}) }}>
                    <View style={styles.view1}>
                        <View>
                            <Image style={styles.img1} source={{uri : item.url}}/>
                        </View>
                    
                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={styles.text1}>{item.title}</Text>
                            <View>
                                <Text style={styles.text2}> {item.publish}</Text>
                            </View>
                        </View>
                    </View> 
                </TouchableOpacity>
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
    icon:{
      marginRight:10, 
      color:'#676767'
    },
    img:{
      color:'#676767', 
      marginBottom:10
    },
    img1:{
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
      color:'#676767', 
      marginBottom:10
    },
    view1:{
      backgroundColor:'white',
      marginHorizontal:15, 
      marginVertical:5, 
      flex:2, 
      flexDirection:'row', 
      borderRadius:15
    }
})

import React, { Component } from 'react';
import { Container, Content, Text, Icon,Item, Input} from 'native-base';
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'

import StyleHome from './StyleHome';

export default class ForYouStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: 1,
          interval: null,
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
    const {navigate} = this.props.navigation
    return (
      <Container style={{backgroundColor:'#F5DEB3'}}>
          <Item style={StyleHome.itemFav}>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
        <Content>
        
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>navigate('DetailStack', {url:item.url, title:item.title})}>
                    <View style={StyleHome.viewHome}>
                        <View>
                            <Image style={StyleHome.image2} source={{uri : item.url}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={StyleHome.textFav}>{item.title}</Text>
                            <View>
                                <Text style={StyleHome.textFav1}> {item.favorite}</Text>
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
    }
    
})
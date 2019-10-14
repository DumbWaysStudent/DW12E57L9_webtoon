import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon,Item, Input} from 'native-base';
import {View, FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native'
import Slideshow from 'react-native-image-slider-show';

import StyleHome from './StyleHome';

export default class ForYouStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: 1,
          interval: null,
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://i.pinimg.com/236x/17/7a/98/177a9886500d8976318cead61edeef60.jpg'
          }, {
            title: 'Pasutri Gaje',
            url: 'https://i.pinimg.com/originals/b9/61/a3/b961a36cc511cdb9a2b5a3403d7bcead.jpg'
          }, {
            title: 'Young Mom',
            url: 'https://vignette.wikia.nocookie.net/webtoon/images/8/85/SAMPUL_Young_Mom.jpg/revision/latest?cb=20190104221450&path-prefix=id'
          }]
        };
      }
      componentDidMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.banners.length ? 0 : this.state.position + 1
            });
          }, 2000)
        });
      }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Container style={{backgroundColor:'#F5DEB3'}}>
          <Item style={StyleHome.item1}>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
        <Content>
        <View style={{marginHorizontal:20}}>
          <Slideshow
            height={300}
            overlay={false}
            arrowSize={0}
            indicatorSelectedColor="red"
            titleStyle={{color : "red",  fontSize:22, 
            fontWeight:'bold'}}
            dataSource={this.state.banners}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })} />
        </View>
      
        <View>
            <Text style={StyleHome.title}>Favorite</Text>
        </View>
        
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>navigate('DetailStack', {url:item.url, title:item.title})}>
                    <View style={StyleHome.view2}>
                        <Image style={StyleHome.imageTouch} source={{uri : item.url}}/>
                        <View style={{width : 150}}>
                            <Text style={StyleHome.text2}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>

        <View>
            <Text style={StyleHome.title}>All</Text>
        </View>

        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={StyleHome.viewHome}>
                        <View>
                            <Image style={StyleHome.image} source={{uri : item.url}}/>
                        </View>

                        <View style={StyleHome.viewHome1}>
                            <Text style={{ textAlign: 'left'}}>{item.title}</Text>
                            <Button style={StyleHome.buttonFav}><Text>+Favorite</Text></Button>
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

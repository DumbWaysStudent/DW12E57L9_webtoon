import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity,StyleSheet, Text, Animated, Easing} from 'react-native';
import {Icon} from 'native-base';

import Logo from './Logo';
import StyleLogin from './StyleLogin';

export default class Login extends Component {
    constructor(){
        super();
        this.springValue = new Animated.Value(1);
        this.state = {
            showPassword : true,
            email:"",
            password:"",
            emailNull:true,
           passNull:true,
            icon: 'eye-off'
       }
    }
    passwordVisibility = () => {
        this.setState({
            showPassword:!this.state.showPassword
        })
    }
    componentDidMount() {
        this.spring();
      }
    spring() {
        this.springValue.setValue(1);
        Animated.spring(this.springValue, {
          toValue: 1.5,
          friction: 0.05,
          tension: 30,
        }).start();
      }
    checkEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(re.test(email)===false){
            this.setState({
                emailNull:true
            })
          }else{
              this.setState({
                  emailNull:false
              })
          }
      };

      checkPassword = (password) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*))$/;
        if(re.test(password)===false){
              this.setState({
               passNull:true
              })
          } else {
              this.setState({
                 passNull:false
              })
          }
      }  

      hiddenIcon(){
        this.setState(prevState =>({
          icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
          showPassword: !prevState.showPassword
        }));
      }

    render(){
        const {navigation} = this.props
        const check = (this.state.emailNull | this.state.passNull)
      
        return(
            <View style={StyleLogin.container}>
                <View style={StyleLogin.loginContainer}>
                 <Logo />
                </View>
                    <TextInput 
                        style={StyleLogin.input}
                        value={this.state.email}
                        onChangeText={(email)=>{this.setState({email}), this.checkEmail(email)}}
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='rgba(225,225,225,10)' 
                    />

                <View style={{position:'relative'}}>
                    <TextInput style = {StyleLogin.input}   
                        returnKeyType="go" 
                        placeholder='Password'          
                        value={this.state.password}
                        onChangeText={(password)=>{this.setState({password}), this.checkPassword(password)}}
                        placeholderTextColor='rgba(225,225,225,10)' 
                        secureTextEntry={this.state.showPassword}>
                    </TextInput>
                  
                    <TouchableOpacity style={StyleLogin.touch}>
                        <View>
                        <Icon name = {this.state.icon} onPress={() => this.hiddenIcon()} />
                        </View>
                    </TouchableOpacity>
                </View>
                   
                    <TouchableOpacity 
                        style={check?StyleLogin.btnDisable:StyleLogin.btnActive}
                        onPress={() => navigation.navigate('Home')}
                        disabled={check ? true : false}>
                     <Animated.View style={{transform: [{scale: this.springValue}]}}>
                        <Text  style={StyleLogin.buttonText}>LOGIN</Text>
                     </Animated.View>
                    </TouchableOpacity>
    
            </View>
        )
    }
}

    

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
//import Icon from 'react-native-vector-icons';


export default class Form extends Component{
  constructor(){
    super();
    this.state = {
        email:null,
        password:null,
        emailEmpty:true,
        passEmpty:true,
        showPassword : true,
   }
}

checkEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(email)===false){
        this.setState({
            emailEmpty:true
        })
      }else{
          this.setState({
              emailEmpty:false
          })
      }
  };

  checkPass = (password) => {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*))$/;
      if(re.test(password)===false){
          this.setState({
            passEmpty:true
          })
      } else {
          this.setState({
              passEmpty:false
          })
      }
  }
  
  passHidden = () => {
    this.setState({
        showPassword:!this.state.showPassword
    })
}
	render(){
    const check = (this.state.emailEmpty)
    const check1 = (this.state.passEmpty)
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(email)=>{this.setState({email}), this.checkEmail(email)}}
              returnKeyType="next"
              />
              <View style={{position:'relative'}}>
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)'
              returnKeyType="go"  
              value={this.state.password}
              onChangeText={(password)=>{this.setState({password}), this.checkPass(password)}}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              secureTextEntry={this.state.showPassword}
              />  
 <TouchableOpacity style={{position:'absolute',bottom:25, right:'10%'}} onPress = { this.passHidden }>
                        <View >
                            <Text style={styles.showhide}>{this.state.showPassword ? "show" : "hide" }</Text>
                        </View>
                    </TouchableOpacity>
              </View>
         
              <TouchableOpacity
                        style={check|check1?styles.button:styles.button1}
                        onPress={this.handleLogin}
                        disabled={check|check1 ? true : false}>

                        <Text   style={check|check1?styles.buttonText:styles.buttonText1}
                        onPress={this.handleLogin}
                        disabled={check|check1 ? true : false}>LOGIN</Text>
                    </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  button1: {
    width:300,
    backgroundColor:'white',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
   fontSize:16,
    fontWeight:'500',
    color:'white',
    textAlign:'center'
  },
  buttonText1: {
    fontSize:16,
    fontWeight:'500',
    color:'#1c313a',
    textAlign:'center'
  }
});
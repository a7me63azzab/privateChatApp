import React, {Component} from 'react'
import {View, Text, TextInput,StyleSheet,ImageBackground,Image,TouchableOpacity} from 'react-native'


class SignupForm extends Component{
    render(){
        return(
            <View style={styles.container}>

                    <ImageBackground                     
                        source={{uri:'https://i.imgur.com/NkfWoHB.jpg'}}
                        style={styles.image}
                        >
                            <TouchableOpacity
                             onPress={ () => { alert("handler here") }}
                            >
                                <Image
                                 source={require('../assets/images/camera.png')}
                                 style={styles.camera}
                                />
                            </TouchableOpacity>
                        </ImageBackground>

                <TextInput
                 placeholder='Email'
                 placeholderTextColor='#ffffff'
                 style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TextInput
                 placeholder='Password'
                 placeholderTextColor='#ffffff'
                 secureTextEntry={true}
                 style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <TextInput
                 placeholder='User name'
                 placeholderTextColor='#ffffff'
                 style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)'
                />
                <View style={styles.fullName}>
                    <TextInput
                        placeholder='First name'
                        placeholderTextColor='#ffffff'
                        style={styles.fullNameInputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                    <TextInput
                        placeholder='Last name'
                        placeholderTextColor='#ffffff'
                        style={styles.fullNameInputBox}
                        underlineColorAndroid='rgba(0,0,0,0)'
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    image:{
        height: 100,
        justifyContent:'flex-end',
        width: 100,
      },
      camera:{
          width:30,
          height:30,
          alignSelf: 'flex-end'
      },
    inputBox:{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:10,
        fontSize:16,
        color:'#ffffff'
    },
    fullName:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    fullNameInputBox:{
        width:150,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        marginHorizontal:3,
        marginVertical:10,
        fontSize:16,
        color:'#ffffff'
    },
    button:{
        width:300,
        backgroundColor:'#1c313a',
        borderRadius:25,
        paddingVertical:12,
        marginVertical:10,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
})

export default SignupForm
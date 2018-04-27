import React, {Component} from 'react'
import {View, StyleSheet,Text} from 'react-native'
import Logo from '../components/Logo'
import SignupForm from '../components/SignupForm'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <View style={styles.container}>
                {/* <Logo/> */}
                <SignupForm/>
                <View style={styles.signupTextCount}>
                    <Text style={styles.signupText}> Already have an account?</Text>
                    <Text style={styles.signupButton}> Sign in </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#455a64'
    },
    signupTextCount:{
        flexGrow: 1,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center'
    },
    signupText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16
    },
    signupButton:{
        fontSize:18,
        fontWeight:'500',
        color:'#ffffff'
    }
  });

  export default Signup


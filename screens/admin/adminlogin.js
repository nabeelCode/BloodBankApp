import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import mainStyle,{donorStyle} from '../../styles/style.js'
import Button from '../../components/Button.js'
import {CustomTextInput as TextInput} from '../../components/CustomTextInput.js'

export default adminlogin=({navigation})=>{
    const [usernameText,onChangeUsername]=useState('')
    const [passwordText,onChangePassword]=useState('')
    const [isValidateUserName,validateFieldUsername]=useState(true)
    const [isValidatePassword,validateFieldPassword]=useState(true)
    const [isLogin,login]=useState(false)
    
    
    useEffect(()=>{
        //login button trigger
        usernameText.length>=3 && passwordText.length>=3 ? login(true):login(false)
    },[usernameText,passwordText])
    
    //validation function on button press
    validation=()=>{
        usernameText.length<3 ? validateFieldUsername(false):validateFieldUsername(true)
        passwordText.length<3 ? validateFieldPassword(false):validateFieldPassword(true)
        isLogin ? navigation.navigate('Admin Main'):null
    }
    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
                <View style={donorStyle.paddingBottom}>
                    <TextInput 
                        placeholder='Username' 
                        style={donorStyle.editext}
                        onChangeText={(item)=>{onChangeUsername(item)}}
                    />
                </View>
                <View style={[donorStyle.errorTextView,]}>
                    <Text style={[donorStyle.errorText,{
                        height:isValidateUserName ? 0:null
                    }]}>Please enter valid text</Text>
                </View>
                <View style={donorStyle.paddingBottom}>
                    <TextInput 
                        placeholder='Password' 
                        style={donorStyle.editext}
                        onChangeText={(item)=>{onChangePassword(item)}}
                    />
                </View>
                <View style={[donorStyle.errorTextView,]}>
                    <Text style={[donorStyle.errorText,{
                        height:isValidatePassword ? 0:null
                    }]}>Please enter valid text</Text>
                </View>
                <Button title='Login'
                    onPress={()=>{validation()}}
                />
            </View>
            <View style={mainStyle.line}></View>
        </View>
    )
}
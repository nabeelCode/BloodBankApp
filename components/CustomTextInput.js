import React from 'react'
import {View,StyleSheet,TextInput} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

const textInputStyle=StyleSheet.create(
    {
        main:{
            
        },
        textInputView:{
            backgroundColor:'white',
            paddingTop:hp('.5%'),
            paddingBottom:hp('.5%'),
            paddingLeft:wp('1.5%'),
            paddingRight:wp('1%'),
            elevation:10
        },
        text:{
            fontSize:wp('5.2%')
        },
        underLine:{
            backgroundColor:'#B81524',
            height:hp('.2%')
        },
        errorTextView:{
            alignItems:'flex-end'
        },
        errorText:{
            color:'#B81524',

            fontStyle:'italic'
        }
    }   
)

export const CustomTextInput=(props)=>{
    return(
        <View style={textInputStyle.main}>
            <View style={textInputStyle.textInputView}>
                <TextInput 
                    style={textInputStyle.text}
                    onChangeText={props.onChangeText}
                    defaultValue={props.text}
                    placeholder={props.placeholder}
                />
            </View>
            <View style={textInputStyle.underLine}></View>
        </View>
    )
}
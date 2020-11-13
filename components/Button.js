import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {button as styl} from '../styles/style.js'   

export default Button=(props)=>{
    return(
        <View style={styl.main}>
            <TouchableOpacity style={styl.buttonView} onPress={props.onPress}>
                <Text style={[styl.buttonText,
            {}]}>{props.title.toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}
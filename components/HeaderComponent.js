import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {headerButtonStyle as style} from '../styles/style.js'

export default HeaderComponent=(props)=>(
    <TouchableOpacity style={style.button} onPress={props.onPress}>
        <Text style={style.buttonText}>{props.title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
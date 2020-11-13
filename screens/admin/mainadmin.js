import React from 'react'
import {View} from 'react-native'
import mainStyle from '../../styles/style.js'
import Button from '../../components/Button.js'

export default mainadmin=({navigation})=>{
    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
                <View style={mainStyle.button}>
                    <Button  title='Edit Donor Data'
                        onPress={()=>navigation.navigate('Edit Donor')}
                    />
                </View>
                <Button title='Add Panchayath'
                    onPress={()=>navigation.navigate('Add Panchayath')}
                />
            </View>
            <View style={mainStyle.line}></View>
        </View>
    )
}
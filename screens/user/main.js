import React from 'react'
import {View} from 'react-native'
import mainStyle from '../../styles/style.js'
import Button from '../../components/Button.js'


main=({navigation})=>{
    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
                <View style={mainStyle.button}>
                    <Button  title='Add'
                        onPress={()=>navigation.navigate('Add Donor')}
                    />
                </View>
                <Button title='Search'
                    onPress={()=>navigation.navigate('Search Donor')}
                />
            </View>
            <View style={mainStyle.line}></View>
        </View>
    )
}

export default main
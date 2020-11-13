import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import mainStyle,{donorStyle} from '../../styles/style.js'
import {DropDown} from '../../components/DropDown.js'
import Button from '../../components/Button.js'
import {CustomTextInput as TextInput} from '../../components/CustomTextInput.js'

bloodGroups=[
    'A +ve',
    'AB +ve',
    'B +ve',
    'O +ve',
    'A -ve',
    'AB -ve',
    'B -ve',
    'O -ve'
]
panchayathList=[
    'Areekode',
    'Kizhuparamba',
    'Urangattiri',
    'Valillapuzha',
    'Edavannappara',
    'Kondotty',
    'Kuzhimanna',
    'Edavanna'
]
searchDonor=({navigation})=>{
        state={panchayath:'',blood:''}
        const [placeText,onChangePlace]=useState('')
        const [isValidatePlace,validatePlace]=useState(true)
        const [isLogin,login]=useState(false)
        
        
        useEffect(()=>{
        //login button trigger
            placeText.length>=3 ? login(true):login(false)
        },[placeText])
        
        //validation function on button press
        validation=()=>{
            placeText.length<3 ? validatePlace(false):validatePlace(true)
            isLogin ? navigation.navigate('Donor List'):null
        }
        return(
            <View style={mainStyle.main}>
                <View style={mainStyle.mainContent}>
                <View style={donorStyle.paddingBottom}>
                        <DropDown 
                            items={bloodGroups}
                            defaultValue='Choose group'
                            headerText='Choose group'
                            headerTextColor='#B81524'
                            selectorTextColor='#BBBBBB'
                        />
                    </View>
                    <View style={donorStyle.paddingBottom}>
                        <DropDown 
                            items={panchayathList}
                            defaultValue='Choose panchayath'
                            headerText='Choose panchyath'
                            headerTextColor='#B81524'
                            selectorTextColor='#BBBBBB'
                        />
                        </View> 
                    <View style={donorStyle.paddingBottom}>
                        <TextInput 
                            placeholder='Place' 
                            style={{backgroundColor:'white'}}
                            onChangeText={(item)=>{onChangePlace(item)}}    
                        />
                        <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidatePlace ? 0:null
                            }]}>Please Enter a Valid Place</Text>
                        </View>
                    </View>
                    <View style={donorStyle.paddingBottom}>
                        <Button title='Search'
                            onPress={()=>{validation()}}
                        /> 
                    </View>
                </View>
                <View style={mainStyle.line}></View>
            </View>
        )
}

export default searchDonor
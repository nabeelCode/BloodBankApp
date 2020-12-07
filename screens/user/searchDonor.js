import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import mainStyle,{donorStyle} from '../../styles/style.js'
import {DropDown} from '../../components/DropDown.js'
import Button from '../../components/Button.js'
import {CustomTextInput as TextInput} from '../../components/CustomTextInput.js'

//redux
import { useSelector } from 'react-redux'

bloodGroups=[
    { id: 1, name: 'A +ve'},
    { id: 2, name: 'AB +ve' },
    { id: 3, name: 'B +ve' },
    { id: 4, name: 'O +ve' },
    { id: 5, name: 'A -ve' },
    { id: 6, name: 'AB -ve' },
    { id: 7, name: 'B -ve' },
    { id: 8, name: 'o -ve'}
]
searchDonor=({navigation})=>{
        state={panchayath:'',blood:''}
        const [placeText,onChangePlace]=useState('')
        const [isValidatePanchayath,validatePanchayath]=useState(true)
        const [isValidateBloodGroup,validateBloodGroup]=useState(true)
        const [isLogin,login]=useState(false)
        
        const panchayathList = useSelector( state => state.panchayath )
        //onItemChange of DropDown component
        const bloodGroupChange = (item) => {
            setBloodGroup(item)
        }
        const panchayathChange = (item) => {
            setPanchayath(item)
        }
        const [bloodGroup,setBloodGroup]=useState('choose group')
        const [panchayath,setPanchayath]=useState('choose panchayath')

        useEffect(()=>{
        //login button trigger  
            validCheck ? login(false):login(true)
        },[bloodGroup, panchayath])
        //VALIDATION
        const validCheck = panchayath == 'choose panchayath' & bloodGroup == 'choose group'
        const validAction = (boolean) => validatePanchayath(boolean) & validateBloodGroup(boolean)
        //validation function on button press
        validation=()=>{
            validCheck ? validAction(false) : validAction(true)
            isLogin ? navigation.navigate('Donor List',{ bloodGroup: bloodGroup, panchayath: panchayath, place: placeText }):null
        }
        return(
            <View style={mainStyle.main}>
                <View style={mainStyle.mainContent}>
                <View style={donorStyle.paddingBottom}>
                        <DropDown 
                            items={bloodGroups}
                            defaultValue={bloodGroup}
                            headerText='Choose group'
                            headerTextColor='#B81524'
                            onItemChange = {bloodGroupChange}
                        />
                        <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidateBloodGroup ? 0:null
                            }]}>Choose Blood Group</Text>
                        </View>
                    </View> 
                    <View style={donorStyle.paddingBottom}>
                        <DropDown 
                            items={panchayathList}
                            defaultValue={panchayath}
                            headerText='Choose panchyath'
                            headerTextColor='#B81524'
                            onItemChange = {panchayathChange}
                        />
                        <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidatePanchayath ? 0:null
                            }]}>Choose Panchayath</Text>
                        </View>
                        </View> 
                    <View style={donorStyle.paddingBottom}>
                        <TextInput 
                            placeholder='Place [optional]' 
                            style={{backgroundColor:'white'}}
                            onChangeText={(item)=>{onChangePlace(item)}}    
                        />
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
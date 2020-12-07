import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import mainStyle,{donorStyle} from '../../styles/style.js'
import {DropDown} from '../../components/DropDown.js'
import Button from '../../components/Button.js'
import {CustomTextInput as TextInput} from '../../components/CustomTextInput.js'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { addDonorData } from '../../redux/DonorSlice'

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
addDonor=({navigation})=>{
    const [bloodGroup,setBloodGroup]=useState('choose blood group')
    const [panchayath,setPanchayath]=useState('choose panchayath')
    const [nameText,onChangeName]=useState('')
    const [placeText,onChangePlace]=useState('')
    const [phoneText,onChangePhone]=useState('')
    const [isValidateName,validateName]=useState(true)
    const [isValidatePlace,validatePlace]=useState(true)
    const [isValidatePhone,validatePhone]=useState(true)
    const [isLogin,login]=useState(false)
    //panchayath selector
    const panchayathList = useSelector( state => state.panchayath )
    //dispatch
    const dispatch = useDispatch()

    useEffect(()=>{
        //login button trigger
        nameText.length>=3 && placeText.length>=3 && phoneText.length>=10 ? login(true):login(false)
    },[nameText,placeText,phoneText])
    
    //validation function on button press
    const validation=()=>{
        nameText.length<3 ? validateName(false):validateName(true)
        placeText.length<3 ? validatePlace(false):validatePlace(true)
        phoneText.length<10 ? validatePhone(false):validatePhone(true)
        isLogin ? 
            dispatch( addDonorData( nameText, bloodGroup, panchayath, placeText, phoneText ) ) &&
            navigation.navigate( 'Main' )
        :null        

    }


    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
            <View style={donorStyle.paddingBottom}>
                    <View style={donorStyle.paddingBottom}>
                        <TextInput 
                            placeholder='Name' 
                            style={{backgroundColor:'white'}} 
                            onChangeText={(item)=>{onChangeName(item)}}
                        />
                        <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidateName ? 0:null
                            }]}>Please Enter a Valid Name</Text>
                        </View>
                    </View>
                    <View style={donorStyle.paddingBottom}> 
                        <DropDown 
                            items={ bloodGroups }
                            defaultValue={ bloodGroup }
                            headerText='Choose group'
                            headerTextColor='#B81524'
                            onItemChange = { item => setBloodGroup(item) } 
                        />
                    </View>
                    <View>
                        <DropDown 
                            items={ panchayathList }
                            defaultValue={ panchayath }
                            headerText='Choose panchyath'
                            headerTextColor='#00686F'
                            headerTextColor='#B81524'
                            onItemChange = { item => setPanchayath(item) }
                        />
                        </View> 
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
                    <TextInput 
                        placeholder='Phone Number' 
                        style={{backgroundColor:'white'}} 
                        keyboardType='number-pad'
                        onChangeText={(item)=>{onChangePhone(item)}}
                    />
                    <View style={[donorStyle.errorTextView,]}>
                        <Text style={[donorStyle.errorText,{
                            height:isValidatePhone ? 0:null
                        }]}>Please Enter a Valid Phone Number</Text>
                    </View>
                </View>
                
                <View style={donorStyle.paddingBottom}>
                    <Button title='Add' onPress={()=>validation()}/>
                </View>
            </View>
            <View style={mainStyle.line}></View>
        </View>
    )
}

export default addDonor
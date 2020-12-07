import React,{useState,useEffect} from 'react'
import {View,Text,} from 'react-native'
import mainStyle,{donorStyle} from '../../styles/style.js'
import {DropDown} from '../../components/DropDown.js'
import Button from '../../components/Button.js'
import {CustomTextInput as TextInput} from '../../components/CustomTextInput.js'
//redux
import { useSelector, useDispatch } from 'react-redux'
import { updateDonorData } from '../../redux/DonorSlice'

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

editDonorData=({route,navigation})=>{
    //id passed from card item
    const { id } = route.params
    //selector for panchayath list
    const panchayathList = useSelector( state => state.panchayath )
    //donor selector
    const donors = useSelector( state => state.donors )
    const selectedDonor = donors.find( donor => donor.id  === id )
    //update dispatch
    const dispatch = useDispatch()
    const [bloodGroup,setBloodGroup]=useState(selectedDonor.bloodGroup)
    const [panchayath,setPanchayath]=useState(selectedDonor.panchayath)
    const [nameText,onChangeName]=useState(selectedDonor.name)
    const [placeText,onChangePlace]=useState(selectedDonor.place)
    const [phoneText,onChangePhone]=useState(selectedDonor.phoneNo)
    const [isDonated,setIsDonated]=useState(selectedDonor.lastDonated)
    const [isValidateName,validateName]=useState(true)
    const [isValidatePlace,validatePlace]=useState(true)
    const [isValidatePhone,validatePhone]=useState(true)
    const [isLogin,login]=useState(false)
    
    //
    const updateDonor = () => {
        dispatch(updateDonorData( id, nameText, bloodGroup, panchayath, placeText, phoneText, isDonated ))
    }

    useEffect(()=>{
        //login button trigger
        nameText.length<3 && placeText.length<3 && phoneText.length<10 ? login(false):login(true)
    },[nameText,placeText,phoneText])
    
    //validation function on button press
    validation=()=>{
        nameText.length<3 ? validateName(false):validateName(true)
        placeText.length<3 ? validatePlace(false):validatePlace(true)
        phoneText.length<10 ? validatePhone(false):validatePhone(true)
        isLogin ? updateDonor() & navigation.navigate('Admin Main'):null
    }

    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
            <View style={donorStyle.paddingBottom}>
                    <View style={donorStyle.paddingBottom}>
                        <TextInput 
                            placeholder={selectedDonor.name}
                            value={nameText} 
                            style={{backgroundColor:'white'}}
                            onChangeText={item=>{onChangeName(item)}}
                        />
                        <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidateName ? 0:null
                            }]}>Please Enter a Valid Name</Text>
                        </View>
                    </View>
                    <View style={donorStyle.paddingBottom}>
                        <DropDown 
                            items={bloodGroups}
                            defaultValue={bloodGroup}
                            headerText='Choose group'
                            headerTextColor='#B81524'
                            onItemChange={ item => setBloodGroup(item) }
                        />
                    </View>
                    <View>
                        <DropDown 
                            items={panchayathList}
                            defaultValue={panchayath}
                            headerText={'Choose panchyath'}
                            headerTextColor='#B81524'
                            onItemChange = { item => setPanchayath(item) }
                        />
                        </View> 
                </View>
                <View style={donorStyle.paddingBottom}>
                    <TextInput 
                        placeholder={ selectedDonor.place } 
                        value={ placeText }
                        style={{backgroundColor:'white'}}
                        onChangeText={item=>{onChangePlace(item)}}
                    />
                    <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidatePlace ? 0:null
                            }]}>Please Enter a Valid Name</Text>
                    </View>
                </View>
                <View style={donorStyle.paddingBottom}>
                    <TextInput 
                        placeholder={ selectedDonor.phoneNo.toString() } 
                        value={ phoneText }
                        style={{backgroundColor:'white'}} 
                        keyboardType='number-pad'
                        onChangeText={item=>{onChangePhone(item)}}
                    />
                     <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidatePhone ? 0:null
                            }]}>Please Enter a Valid Name</Text>
                    </View>
                </View>
                <View style={donorStyle.paddingBottom}>
                    <TextInput 
                        placeholder={ selectedDonor.lastDonated ? selectedDonor.lastDonated:'Date of Blood Donated' } 
                        value={ isDonated }
                        style={{backgroundColor:'white'}} 
                        keyboardType='number-pad'
                        onChangeText={item=>{setIsDonated(item)}}
                    />
                     
                </View>
                
                <View style={donorStyle.paddingBottom}>
                    <Button title='UPDATE' onPress={()=>{validation()}}/>
                </View>
            </View>       
            <View style={mainStyle.line}></View>                 
        </View>
    )
}

export default editDonorData
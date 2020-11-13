import React,{useState} from 'react'
import {View} from 'react-native'
import mainStyle,{donorStyle} from '../../styles/style.js'
import {DropDown} from '../../components/DropDown.js'
import Button from '../../components/Button.js'
import {CustomTextInput as TextInput} from '../../components/CustomTextInput.js'

bloodGroupList=[
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
editDonorData=()=>{
    const [bloodGroup,setBloodGroup]=useState('')
    const [nameText,onChangeName]=useState('')
    const [placeText,onChangePlace]=useState('')
    const [phoneText,onChangePhone]=useState('')
    const [isValidateName,validateName]=useState(true)
    const [isValidatePlace,validatePlace]=useState(true)
    const [isValidatePhone,validatePhone]=useState(true)
    const [isLogin,login]=useState(false)

    useEffect(()=>{
        //login button trigger
        nameText.length>=3 && placeText.length>=3 && phoneText.length>=10 ? login(true):login(false)
    },[nameText,placeText,phoneText])
    
    //validation function on button press
    validation=()=>{
        nameText.length<3 ? validateName(false):validateName(true)
        placeText.length<3 ? validatePlace(false):validatePlace(true)
        phoneText.length<10 ? validatePhone(false):validatePhone(true)
        isLogin ? null:null
    }

    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
            <View style={donorStyle.paddingBottom}>
                    <View style={donorStyle.paddingBottom}>
                        <TextInput 
                            placeholder='Name' 
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
                            items={bloodGroupList}
                            defaultValue='Choose group'
                            headerText='Choose group'
                            headerTextColor='#B81524'
                            selectorTextColor='#BBBBBB'
                        />
                    </View>
                    <View>
                        <DropDown 
                            items={panchayathList}
                            defaultValue='Choose panchayath'
                            headerText='Choose panchyath'
                            headerTextColor='#B81524'
                            selectorTextColor='#BBBBBB'
                        />
                        </View> 
                </View>
                <View style={donorStyle.paddingBottom}>
                    <TextInput 
                        placeholder='Place' 
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
                        placeholder='Phone Number' 
                        style={{backgroundColor:'white'}} 
                        keyboardType='number-pad'
                        onChangePhone={item=>{onChangePhone(item)}}
                    />
                     <View style={[donorStyle.errorTextView,]}>
                            <Text style={[donorStyle.errorText,{
                                height:isValidatePhone ? 0:null
                            }]}>Please Enter a Valid Name</Text>
                    </View>
                </View>
                
                <View style={donorStyle.paddingBottom}>
                    <Button title='Add' onPress={()=>{validation()}}/>
                </View>
            </View>       
            <View style={mainStyle.line}></View>                 
        </View>
    )
}

export default addDonor
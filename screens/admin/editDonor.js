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

export default editDonor=({navigation})=>{
        const [ bloodGroup,setBloodGroup ] = useState('choose group')
        const [ panchayath, setPanchayath ] = useState('choose panchayath')
        const [nameText,onChangeName]=useState('')
        const [placeText,onChangePlace]=useState('')
        const [isValidateName,validateName]=useState(true)
        const [isValidatePlace,validatePlace]=useState(true)
        const [isValidateBloodGroup,validateBloodGroup]=useState(true)
        const [isValidatePanchayath,validatePanchayath]=useState(true)
        const [isLogin,login]=useState(false)
        //panchayath selector
        const panchayathList = useSelector( state => state.panchayath )
        //validation
        const validCheck =  nameText.length < 3  || bloodGroup == 'choose group' || panchayath == 'choose panchayath'   
        useEffect(()=>{
            //login button trigger  
            validCheck ? login(false):login(true)
        },[validCheck])
        
        //validation function on button press
        validation=()=>{
            nameText.length < 3 ? validateName(false):validateName(true)
            placeText.length < 3  ? validatePlace(false):validatePlace(true)
            bloodGroup == 'choose group' ? validateBloodGroup(false):validateBloodGroup(true)
            panchayath == 'choose panchayath' ? validatePanchayath(false):validatePanchayath(true)
            isLogin ? navigation.navigate('List Edit Donor',{ name: nameText, bloodGroup: bloodGroup, panchayath: panchayath, place: placeText  }):null
        }

        return(
            <View style={mainStyle.main}>
                {console.log(validCheck)}
                <View style={mainStyle.mainContent}>
                <View style={mainStyle.extramiddleview}>
                    <View style={donorStyle.paddingBottom}>
                            <TextInput 
                                placeholder='Name' 
                                style={{backgroundColor:'white'}}
                                onChangeText={item=>{onChangeName(item)}}
                            />
                            <View style={[donorStyle.errorTextView,]}>
                                <Text style={[donorStyle.errorText,{
                                    height:isValidateName ? 0:null
                                }]}>Please enter valid text</Text>
                            </View>
                    </View>
                    <View style={donorStyle.paddingBottom}>
                        <DropDown 
                            items={bloodGroups}
                            defaultValue={bloodGroup}
                            headerText='Choose group'
                            headerTextColor='#B81524'
                            onItemChange = { item => setBloodGroup(item) } 
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
                            onItemChange = { item => setPanchayath(item) }
                        />
                        <View style={[donorStyle.errorTextView,]}>
                                <Text style={[donorStyle.errorText,{
                                    height:isValidatePanchayath ? 0:null
                                }]}>Choose Panchayath</Text>
                            </View>
                        </View> 
                        <View style={donorStyle.paddingBottom}>
                            <TextInput 
                                placeholder='Place' 
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
                </View>
                <View style={mainStyle.line}></View>
            </View>
    )
}
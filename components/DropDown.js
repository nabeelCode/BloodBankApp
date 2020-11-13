/*
---------DropDown component props-----------
        items : drop down items,object array,object keys: key & label
        itemTextColor : drop down item color
        defaultValue : default selector item value
        selectorTextColor : selector item color
        dropDownBackground : drop down modal background color
        headerText : header text of drop down modal
        headerTextColor : header text color of drop down
*/
import React,{useState} from 'react'
import {View,Image,Text,StyleSheet,Modal,ScrollView} from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import {dropDownStyle as style} from '../styles/style.js'
import Icon from 'react-native-vector-icons/FontAwesome'


export const DropDown=(props)=>{
    /*Drop Down Props:
    */
    const headerTextColor=props.headerTextColor ? props.headerTextColor:'#e53939'
    const itemTextColor=props.itemTextColor ? props.itemTextColor:'black'
    const defaultValue = props.defaultValue ? props.defaultValue:'Choose an Item'
    const selectorTextColor=props.selectorTextColor ? props.selectorTextColor:'black'
    const dropDownBackground=props.dropDownBackground ? props.dropDownBackground:'white'
    const headerText = props.headerText ? props.headerText:'Choose Item'
    const pressableItem = props.items.map(
        (a,index)=>{
            return(
                <View  key={index}>
                    <Pressable onPress={
                        ()=>{
                            setDefaultDropListValue(a)
                            setModal(false)
                        }
                    }>
                        <Text key={index} style={[
                        style.dropDownText,
                        {   
                            color:itemTextColor
                        }]}>{a}</Text>
                    </Pressable>
                </View>
            )
        }
    )

    const [modalstatus,setModal]=useState(false)
    const [defaultDropListValue,setDefaultDropListValue]=useState(defaultValue)
    return(
        <View style={style.main}>
            <Pressable style={style.bloodgroup} onPress={()=>{
                    setModal(true)
                }}>
                    <View style={style.dropTextView}>
                        <Text style={[
                            style.dropDownSelectorText,
                            {
                                color:selectorTextColor
                            }
                        ]}>{defaultDropListValue}</Text>
                    </View>
                    <View style={style.bloodGroupImage}>
                       <Icon 
                            name='caret-down'
                            color='#B81524'
                            size={30}
                       />
                    </View>
            </Pressable>
            <View style={style.underLine}></View>
            <Modal
                visible={modalstatus}
                transparent={true}
            >
                <Pressable style={style.modal} onPress={()=>{setModal(false)}}>
                    <View  style={[
                        style.insidemodal,
                        {
                            backgroundColor:dropDownBackground,
                        }]}>
                        <Text style={[
                            style.dropDownHeaderText,
                            {
                                color:headerTextColor
                            }
                        ]}>{headerText}</Text>
                        <ScrollView>
                            {pressableItem}
                        </ScrollView>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}
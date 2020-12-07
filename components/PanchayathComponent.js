import React,{useState} from 'react'
import {View,Modal,TextInput,Pressable,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {panchayathStyle as styl} from '../styles/style.js'
import { useDispatch } from 'react-redux'
import { AddPanchayath, updatePanchayath } from '../redux/PanchayathSlice'

export const PanchayathComponent = (props) => {
    const [panchayath,setPanchayath] = useState('')
    const dispatch = useDispatch()

    const panchayathDispatch = () => {
        if( props.mode == 'add' ){
            dispatch(
                AddPanchayath({name: panchayath})
            )
        } else {
            dispatch(
                updatePanchayath({id:props.mode,name: panchayath})
            )
        }
        props.onClose()
    }
    const add = {
        heading: 'Add Panchayath',
        button : 'ADD'
    }
    const edit = {
        heading: 'Update Panchayath',
        button : 'UPDATE'
    }
    const variables = props.mode == 'add' ? add:edit
    const [ modal,setModal ] = useState(true)


    return(
        <View>
            {/** Add Panchayath Modal */}              
            <Modal
                visible = {modal}
                transparent = {true}
            >   
                <View style = {styl.modal}>
                    <View style={styl.modalContent}>
                    <Icon.Button 
                        name='chevron-down'
                        backgroundColor='white'
                        color='#B81524'
                        style={{alignSelf:'flex-end'}}
                        onPress={()=>{props.onClose()}}
                    />
                        <Text style={styl.panchayathText}>{variables.heading}</Text>
                        <TextInput 
                            style={styl.modalPanchayath} 
                            placeholder='panchayath'
                            onChangeText = {(item) => { setPanchayath(item) }}
                        />
                        <View style={styl.underLine}></View>
                        <Pressable style={styl.button} onPress={()=>{panchayathDispatch()}}>
                            <Text style={styl.buttonText}>{variables.button}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
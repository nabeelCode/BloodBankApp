import React, { useState } from 'react'
import {View,FlatList,Text,Modal,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import mainStyle,{panchayathStyle as styl} from '../../styles/style.js'
//redux
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removePanchayath } from '../../redux/PanchayathSlice'
//components
import {PanchayathComponent} from '../../components/PanchayathComponent'

export default addPanchayath=()=>{
    //add panchayath view
    const [ modal,setModal ] = useState({isOpen:false,mode:''})
    //panchayath data
    const panchayathList = useSelector( state => state.panchayath )
    const dispatch = useDispatch()

    renderItem=({item})=>(
        <View style={styl.itemStyle}>
            <View style={styl.itemTextView}>
                <View style={styl.text}>
                    <Text>{item.name}</Text>
                </View>
            <View  style={styl.iconView}>
            <Pressable 
                
                onPress = { () => { setModal({isOpen:!modal.isOpen, mode: item.id}) } }
            >
                    {
                        <Icon 
                            name='pencil'
                            color='#B81524'
                            size={20}
                        />
                    }
                </Pressable>
                <Pressable 
                    style={styl.iconStyle}
                    onPress = { () => { dispatch(removePanchayath({id: item.id})) } }
                >
                        {
                            <Icon 
                                name='trash'
                                color='#B81524'
                                size={20}
                            />
                        }
                </Pressable>
            </View>
            </View>
                <View style={styl.line}></View>            
        </View>
    )
    const onClosed = () => {
        setModal({isModal: false})
        console.log(modal)
    }
    return(
            <View style={styl.main}>
                {modal.isOpen ? <PanchayathComponent mode={modal.mode} onClose={()=>{onClosed()}} />:null}
                <View style={styl.content}>
                    <Pressable 
                        style={styl.addButtonView}  
                        onPress = { () => { setModal({isOpen:!modal.isOpen, mode: 'add'}) } }
                    >
                        {
                            <Icon
                                name="plus" 
                                size={20}
                                color='white'
                            />
                        }
                    </Pressable>
                    
                    <FlatList
                        data={panchayathList}
                        renderItem={renderItem}
                        keyExtractor={item=>{return item.id.toString()}}
                        style={styl.flatListStyle}
                    />
                    <View style={styl.line}></View>
                </View>
        </View>
        )
    }
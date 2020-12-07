import React,{useState} from 'react'
import {View,Text,Image,Modal,Pressable,FlatList} from 'react-native'
import {cardStyle as style} from '../styles/style.js'
import Icon from 'react-native-vector-icons/FontAwesome'
//redux
import { deleteDonorData } from '../redux/DonorSlice'
import { useDispatch } from 'react-redux'

export const adminCardView=(props)=>{
    //dispatch
    const dispatch = useDispatch()
    const deleteDonor = (item) => {
        dispatch(deleteDonorData({id: item.id}))
    }
    const renderItem = ({ item }) => (
        <View style={style.cardMain}>
            <View style={style.menuView}>
                    <View style={style.textWithIcons}>
                        <Text>Name: {item.name} </Text>
                    </View>
            </View>
            <View style={style.textView}>
                <Text>Place: {item.place}</Text>
            </View>
            <View style={style.textView}>
                <Text>Panchayath: {item.panchayath}</Text>
            </View>
            <View style={style.menuView}>
                <View style={style.textWithIcons}>
                    <Text>Last Donated: {item.lastDonated}</Text>
                </View>
                <View style={style.icons}>
                    <Pressable style={style.optionsView}  onPress={()=>{
                        props.onEdit(item)}}>
                        {
                            <Icon 
                                name='pencil'
                                size={20}
                                color='#B81524'
                            />
                        }
                    </Pressable>
                    <Pressable onPress={ () => { deleteDonor(item) } }>
                        <Icon 
                            name='trash'
                            size={20}
                            color='#B81524'
                        />
                    </Pressable>
                </View>
            </View>
        </View>
      );

    const Card = () => (
        <View style={style.main}>
            <FlatList
                    data={props.cardData}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id.toString()}
            />
        </View>
    ) 
    const NoCard = () => (
        <View style={style.emptyView}>
           <Text style={style.emptyText}>No Such Data Found</Text>
           <Text>Please Enter Correct Data</Text>
        </View>
    )
    return(
        props.cardData.length == 0 ? NoCard():Card()
    )
}
import React,{useState} from 'react'
import {View,Text,Image,Modal,Pressable,FlatList} from 'react-native'
import {cardStyle as style} from '../styles/style.js'
import Icon from 'react-native-vector-icons/FontAwesome'

export const adminCardView=(props)=>{
    const [optionsMenu,setOptionsMenu]=useState(false)
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
                        props.navigation.navigate('Edit Donor Data')}}>
                        {
                            <Icon 
                                name='pencil'
                                size={20}
                                color='#B81524'
                            />
                        }
                    </Pressable>
                    <View>
                        <Icon 
                            name='trash'
                            size={20}
                            color='#B81524'
                        />
                    </View>
                </View>
            </View>
        </View>
      );
    return(
        <View style={style.main}>
            <FlatList
                    data={props.cardData}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
            />
        </View>
    )
}
import React from 'react'
import {View,Image,FlatList,Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import mainStyle,{panchayathStyle as styl} from '../../styles/style.js'
import Button from '../../components/Button.js'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const data=[
    {
        id:'1',
        place:'Areekode'
    },
    {
        id:'2',
        place:'Kizhuparamba'
    },
    {
        id:'3',
        place:'Urangattiri'
    },
    {
        id:'4',
        place:'Valillapuzha'
    }
    
]
export default addPanchayath=()=>{
    renderItem=({item})=>(
        <View style={styl.itemStyle} key={item.id}>
            <View style={styl.itemTextView}>
                <View style={styl.text}>
                    <Text>{item.place}</Text>
                </View>
                <View style={styl.image}>
                    {
                        <Icon 
                            name='pencil'
                            color='#B81524'
                            size={20}
                        />
                    }
                </View>
            </View>
                <View style={styl.line}></View>            
        </View>
    )
    return(
            <View style={styl.main}>
                <View style={styl.content}>
                    <View style={styl.addButtonView}>
                        {
                            <Icon
                                name="plus"
                                size={20}
                                color='white'
                            />
                        }
                    </View>
                    
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item=>{return item.id}}
                    />
                    <View style={styl.line}></View>
                </View>
        </View>
        )
    }
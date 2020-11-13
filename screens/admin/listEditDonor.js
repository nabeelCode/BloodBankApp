import React from 'react'
import {View} from 'react-native'
import mainStyle from '../../styles/style.js'
import {adminCardView as CardView} from '../../components/adminCardView.js'
import Button from '../../components/Button.js'

const cardData=[
    {
        id:'1',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'2',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'3',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'4',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'5',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'6',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'7',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'8',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    },
    {
        id:'9',
        name:'nabeel',
        place:'areekode',
        panchayath:'areekode',
        lastDonated:'14-09-2009'
    }
]
export default listEditDonor=({navigation})=>{
    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
                <CardView cardData={cardData} navigation={navigation}/>
            </View> 
            <View style={mainStyle.line}></View>
        </View>
    )
}
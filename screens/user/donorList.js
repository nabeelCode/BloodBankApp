import React from 'react'
import {View,Text} from 'react-native'
import mainStyle from '../../styles/style.js'
import {userCardView as CardView} from '../../components/userCardView.js'
import main from './main.js'

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
export default donorList=()=>{
    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
                <CardView cardData={cardData}/>
            </View>
            <View style={mainStyle.line}></View>
        </View>
    )
}
import React from 'react'
import {View} from 'react-native'
import mainStyle from '../../styles/style.js'
import {userCardView as CardView} from '../../components/userCardView.js'
//redux
import { useSelector } from 'react-redux'

export default donorList=({route})=>{
    const { place, panchayath, bloodGroup } = route.params
    const donorSelector = useSelector( state => state.donors )
    const condition = donor => donor.place === place & donor.panchayath === panchayath & donor.bloodGroup === bloodGroup
    const donors = donorSelector.filter( 
        donor => place != '' ? condition(donor) : donor.panchayath === panchayath & donor.bloodGroup === bloodGroup 
    )
    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
                <CardView cardData={donors}/>
            </View>
            <View style={mainStyle.line}></View>
        </View>
    )
}
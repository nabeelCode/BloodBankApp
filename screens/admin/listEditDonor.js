import React from 'react'
import {View} from 'react-native'
import mainStyle from '../../styles/style.js'
import {adminCardView as CardView} from '../../components/adminCardView.js'
//redux
import { useSelector} from 'react-redux'

export default listEditDonor=({navigation,route})=>{

    const { name, bloodGroup, panchayath, place } = route.params
    const donorSelector = useSelector( state => state.donors )
    const condition = donor => donor.name === name & donor.place === place & donor.panchayath === panchayath & donor.bloodGroup === bloodGroup
    const conditionWithoutPlace = donor => donor.name === name & donor.panchayath === panchayath & donor.bloodGroup === bloodGroup
    const donors = donorSelector.filter( 
        donor => place == '' ? conditionWithoutPlace(donor):condition(donor) 
    )
    return(
        <View style={mainStyle.main}>
            <View style={mainStyle.mainContent}>
                <CardView 
                    cardData={donors} 
                    onEdit={(item)=>{navigation.navigate('Edit Donor Data',{id: item.id})}}
                />         
            </View> 
            <View style={mainStyle.line}></View>
        </View>
    )
}
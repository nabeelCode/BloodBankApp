import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {  
        id:1,
        name: 'nabeel',
        bloodGroup: 'AB +ve',
        panchayath: 'Areekode',
        place: 'pathanapuram',
        phoneNo: 7356568095,
        lastDonated: '10-02-2020'
    },
    {
        id:2,
        name: 'shaheer',
        bloodGroup: 'O +ve',
        panchayath: 'Areekode',
        place: 'areekode',
        phoneNo: 7356568095,
        lastDonated: '19-02-2020'
    },
    {
        id:3,
        name: 'shafeen',
        bloodGroup: 'A +ve',
        panchayath: 'Areekode',
        place: 'areekode',
        phoneNo: 7356568095,
        lastDonated: '1-02-2020'
    },
    {   
        id:4,
        name: 'shameem',
        bloodGroup: 'A -ve',
        panchayath: 'Areekode',
        place: 'areekode',
        phoneNo: 7356568095,
        lastDonated: '29-02-2020'
    }
]

const DonorSlice = createSlice({
    name: 'donors',
    initialState,
    reducers: {
        addDonorData : {
            reducer: ( state, action ) => {
                state.push( action.payload )
            },
            prepare : ( name, bloodGroup, panchayath, place , phoneNo ) => {
                const id = nanoid()
                const lastDonated = ''
                return{
                    payload: { id, name, bloodGroup, panchayath, place, phoneNo, lastDonated }
                }
            }
        },
        updateDonorData:{
            reducer: ( state, action ) => {
                const donorList = action.payload
                let donor = state.find( donor => donor.id === donorList.id )
                if(donor){
                    donor.name = donorList.name
                    donor.bloodGroup = donorList.bloodGroup
                    donor.panchayath = donorList.panchayath
                    donor.place = donorList.place
                    donor.phoneNo = donorList.phoneNo
                    donor.lastDonated = donorList.lastDonated
                }
            },
            prepare: ( id, name, bloodGroup, panchayath, place, phoneNo, lastDonated ) => {
                return{
                    payload: {
                        id,
                        name,
                        bloodGroup,
                        panchayath,
                        place,
                        phoneNo,
                        lastDonated
                    }
                }
            }
        },
        deleteDonorData: ( state, action ) => {
            const { id } = action.payload
            console.log(id)
            const donor = state.find( donor => donor.id === id )
            if(donor){
                console.log('entered')
                state.splice( state.indexOf(donor), 1 )
            }
        }
    }
})

export const { addDonorData, updateDonorData, deleteDonorData } = DonorSlice.actions
export default DonorSlice.reducer
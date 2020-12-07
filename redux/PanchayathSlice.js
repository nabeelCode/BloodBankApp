import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

initialState = [
    { id: 1, name: 'Areekode' },
    { id: 2, name: 'Kizhuparamba' },
    { id: 3, name: 'Urangattiri' },
    { id: 4, name: 'Valillapuzha' },
    { id: 5, name: 'Edavannappara' },
    { id: 6, name: 'Kondotty' },
    { id: 7, name: 'Kuzhimanna' },
    { id: 8, name: 'Edavanna' }
]

const PanchayathSlice = createSlice({
    name:'panchayath',
    initialState,
    reducers:{
        AddPanchayath: (state,action) => {
            const id = nanoid()
            const {name} = action.payload
            if(name){
                state.push({id,name})
            }
        },
        updatePanchayath: (state,action) => {
            const { id, name } = action.payload
            const panchayath = state.find( state => state.id === id )
            if(panchayath){
                panchayath.name = name
            }
        },
        removePanchayath: (state, action) => {
            const { id } = action.payload
            const panchayath = state.find( state => state.id === id )
            if( panchayath ){
                state.splice( state.indexOf(panchayath), 1 )
            }
        }
    }
})

export const { AddPanchayath, updatePanchayath, removePanchayath } = PanchayathSlice.actions
export default PanchayathSlice.reducer
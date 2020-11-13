import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//user screens import
import main from './screens/user/main.js'
import searchDonor from './screens/user/searchDonor.js'
import donorList from './screens/user/donorList.js'
import addDonor from './screens/user/addDonor.js'
//admin screens import
import adminlogin from './screens/admin/adminlogin.js'
import mainadmin from './screens/admin/mainadmin.js'
import editDonor from './screens/admin/editDonor.js'
import listEditDonor from './screens/admin/listEditDonor.js'
import addPanchayath from './screens/admin/addPanchayath.js'
import editDonorData from './screens/admin/editDonorData.js'
//header button component
import HeaderComponent from './components/HeaderComponent.js'

const Stack = createStackNavigator()

const app=()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#B81524'
            },
            headerTintColor: '#fff', 
        }}>
          <Stack.Screen
            name="Main"
            component={main}
            options={(({navigation})=>({
              title: 'Blood Bank App' ,
              headerRight:()=>(
                  <HeaderComponent 
                    onPress={()=>{navigation.navigate('Admin Login')}}
                    title='admin'
                  />
                )
              }) 
            )} 
          />
          <Stack.Screen name='Admin Login' component={adminlogin}/>
          <Stack.Screen name='Admin Main' component={mainadmin} 
            options={(({navigation})=>({
              title:'Admin Page',
              headerRight:()=>(
                  <HeaderComponent 
                    onPress={()=>{navigation.navigate('Admin Login')}}
                    title='logout'
                  />
                )
              }) 
            )}
          />
          <Stack.Screen name='Edit Donor' component={editDonor}
            options={(({navigation})=>({
              headerRight:()=>(
                  <HeaderComponent 
                    onPress={()=>{navigation.navigate('Admin Login')}}
                    title='logout'
                  />
                )
              }) 
            )} 
          />
          <Stack.Screen name='List Edit Donor' component={listEditDonor}
            options={(({navigation})=>({
              title:'Search Donor',
              headerRight:()=>(
                  <HeaderComponent 
                    onPress={()=>{navigation.navigate('Admin Login')}}
                    title='logout'
                  />
                )
              }) 
            )}
          />
          <Stack.Screen name='Add Panchayath' component={addPanchayath}
            options={(({navigation})=>({
              headerRight:()=>(
                  <HeaderComponent 
                    onPress={()=>{navigation.navigate('Admin Login')}}
                    title='logout'
                  />
                )
              }) 
            )}
          />
          <Stack.Screen name='Search Donor' component={searchDonor}/>
          <Stack.Screen name='Donor List' component={donorList}/>
          <Stack.Screen name='Add Donor' component={addDonor}/>
          <Stack.Screen name='Edit Donor Data' component={editDonorData}
            options={(({navigation})=>({
              headerRight:()=>(
                  <HeaderComponent 
                    onPress={()=>{navigation.navigate('Admin Login')}}
                    title='logout'
                  />
                )
              }) 
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
export default app
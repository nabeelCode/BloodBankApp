import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

export const headerButtonStyle=StyleSheet.create(
    {
        button:{
            paddingTop:hp('.7%'),
            paddingBottom:hp('.7%'),
            marginRight:wp('2%'),
            alignItems:'center',
            borderRadius:40,
            borderWidth:2,
            borderColor:'white'
          },
          buttonText:{
            fontSize:wp('3.5%'),
            fontWeight:'bold',
            color:'white',
            paddingRight:wp('4%'),
            paddingLeft:wp('4%'),
          }
    }
)
mainStyle = StyleSheet.create(
    {
        main:{
            flex:1,
            paddingTop:hp('2%'),
            backgroundColor:'white',
            justifyContent:'center'
        },
        mainContent:{
            paddingLeft:wp('2%'),
            paddingRight:wp('2%'),
            flex:1,
            paddingTop:hp('2%'),
            backgroundColor:'white',
            justifyContent:'center'
        },  
        adminview:{
            flex:1,
            alignSelf:'flex-end',
            paddingLeft:wp('2%'),
            paddingRight:wp('2%'),
        },
        extramiddleview:{
            justifyContent:'center'
        },
        buttonview:{
            justifyContent:'center',
            paddingTop:hp('2%'),
            paddingBottom:hp('2%'),
            paddingRight:wp('2%'),
            paddingLeft:wp('2%')
        },
        button:{
            bottom:('2%')
        },
        line:{
            height:'2%',
            backgroundColor:'#B81524'
        }
    }
)

export const donorStyle = StyleSheet.create(
    {
        editstyle:{
            paddingTop:hp('2%'),
            paddingBottom:hp('2%'),
            paddingRight:wp('2%'),
            paddingLeft:wp('2%'),
        },
        paddingBottom:{
            paddingBottom:10
        },
        headingStyle:{
            fontSize:140,
            fontStyle:'italic',
            fontWeight:'bold',
            color:'white'
        },
        editext:{
            backgroundColor:'white'
        },
        pickerstyle:{
            backgroundColor:'white'
        },
        errorTextView:{
            alignItems:'flex-end'
        },
        errorText:{
            color:'#B81524',
            fontStyle:'italic'
        }
    }
)

export const cardStyle=StyleSheet.create(
    {
        main:{
            flex:1,
        },
        cardMain:{
            backgroundColor:'white',
            padding:'2%',
            marginBottom:'2%',
            borderRadius:5,
            elevation:5,
            borderWidth:hp('.05%'),
            borderColor:'#B81524',
            shadowColor:'#B81524'
        },
        menuView:{
            padding:'1%',
            flexDirection:'row'
        },
        textWithIcons:{
            flex:5
        },
        icons:{
            flex:1,
            flexDirection:'row',
            justifyContent:'flex-end'
        },
        textView:{
            padding:'1%'
        },
        optionsView:{
            marginRight:15
        },
        menuModal:{
            justifyContent:'flex-end',
            flex:1,
            backgroundColor:'rgba(184, 21, 36, 0.05)'
        },menu:{
            backgroundColor:'white',
            marginRight:'2.5%',
            marginLeft:'2.5%',
            padding:'1%',
            borderRadius:4,
            elevation:5
        },
        menuText:{
            margin:'2%'
        },
        line:{
            backgroundColor:'#B81524',
            height:'1%',
            borderRadius:10,
            top:'1%'
        },
        //no card data view
        emptyView:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        emptyText:{
            fontSize: hp('3%'),
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#B81524'
        }
    }
)

export const panchayathStyle=StyleSheet.create(
    {
        main:{
            flex:1,
            backgroundColor:'white', 
        },
        top:{
            flex:1
        },
        content:{
          flex:1,
        },
        addButtonView:{
            paddingTop:'2%',
            paddingBottom:'2%',
            paddingRight:'2.5%',
            paddingLeft:'2.5%',
            marginTop:'4%',
            marginBottom:'4%',
            marginRight:'1%',
            borderRadius:20,
            alignItems:"flex-end",
            alignSelf:'flex-end',
            backgroundColor:'#B81524'
        },
        addButton:{
            borderColor:'white'
        },
        itemStyle:{
            flex:1
        },
        itemTextView:{
            paddingTop:'2%',
            paddingBottom:'2%',
            paddingRight:'2%',
            paddingLeft:'2%',
            marginLeft:'2%',
            flexDirection:'row',
        },
        line:{
            height:'2%',
            backgroundColor:'#B81524'
        },
        text:{
            flex:2
        },
        iconView:{
            flex:1,
            justifyContent:'flex-end',
            margin:'1%',
            flexDirection:'row',
        },
        iconStyle:{
            marginLeft: wp('3%')
        },  
        modalView:{
            flex:1,
           
        },
        modal:{
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
        },
        modalContent:{
            backgroundColor:'white',
            paddingTop: hp('3%'),
            paddingBottom: hp('5%'),
            paddingLeft: wp('5%'),
            paddingRight: wp('5%'),
            elevation: 5,
            justifyContent: 'center',
            
        },
        button:{
            paddingLeft: wp('4%'),
            paddingRight: wp('4%'),
            paddingTop: hp('.8%'),
            paddingBottom: hp('.8%'),
            borderRadius: 20,
            backgroundColor:'#B81524',
            alignSelf:'center',
            marginTop: hp('2%')
        },
        panchayathText:{
            color: '#B81524',
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            marginBottom: hp('1%'),
            marginTop: hp('1%')
        },
        modalInnerView:{
            alignItems: 'center'
        },
        modalPanchayath:{
            width:wp('70%')
        },
        buttonText:{
            color:'white'
        },
        underLine:{
            backgroundColor:'#B81524',
            height:hp('.2%')
        },
        flatListStyle:{
            flex:1
        }
    }
)

export const button=StyleSheet.create(
    {
        main:{
            marginTop:2
        },
        buttonView:{
            backgroundColor:'#B81524',
            paddingTop:hp('1%'),
            paddingBottom:hp('1%'),
            alignItems:'center',
            borderRadius:40,
        },
        buttonText:{
            fontSize:wp('4%'),
            fontWeight:'bold',
            color:'white',
            paddingRight:wp('4%'),
            paddingLeft:wp('4%'),
        }
    }
)
export const dropDownStyle=StyleSheet.create(
    {
        main:{
        },
        text:{
            color:'white',
            fontWeight:'bold'
        },
        modal:{
            flex:1,
            backgroundColor:'rgba(255, 255, 255, .4)',
            justifyContent:'center',
            alignItems:'center',
            padding:20,
        },
        insidemodal:{   
            padding: 15,
            elevation: 5,
            borderRadius:5.,
            height:'80%',
            justifyContent:'center'
        },
        bloodgroup:{
            flexDirection:'row',
            padding:10,
            elevation:5,
            backgroundColor:'white',
        },
        dropTextView:{
            flex:5,
            alignSelf:'flex-start'
        },
        bloodGroupImage:{
            flexDirection:'row-reverse',
            flex:1,
            padding:10  
        },
        dropDownSelectorText:{
            fontSize:20,
            padding:5
        },
        dropDownText:{
            fontSize:20,
            padding:15
        },
        dropDownHeaderText:{
            fontWeight:'bold',
            fontSize:25,
            paddingTop:20,
            paddingBottom:20,
            paddingRight:50
        },
        line:{
            backgroundColor:'#B81524',
            height:'2%',
            borderRadius:10,
            top:'1%'
        },
        underLine:{
            backgroundColor:'#B81524',
            height:hp('.2%')
        }
    }
)

export default mainStyle
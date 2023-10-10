import { View, Text } from 'react-native'
import React from 'react'
import AddressAddView from './AddressAddView'
// import { StoreState } from '../../../../Models/reduxModel'
// import { connect } from 'react-redux'
// import { AddressAddAction } from '../../../../Stores/Actions/userAction'
// import { userDetail } from '../../../../Models/User'


const AddressAdd = ({navigation,}:AddressAddProps) => {
  // const AddressAdd = (data: any) => {
  //       data.customer_id= user?.customer_id
  //   AddressAddAction({
  //     data:data,
  //     navigation: navigation,
  //   });
  // };
  return (
    <View>
    <AddressAddView navigation={navigation}  />
   </View>
 )
  
}

// const mapStateToProps = (state: StoreState, ownProps: any) => {
//   return {
//     user: state.user.user_detail
//   };
// };
// const mapDispatchToProps = {
//   AddressAddAction 
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddressAdd);
export default AddressAdd
interface AddressAddProps {
  navigation?: any;
  // user?: userDetail;
  // AddressAddAction?: any;

 
}
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { Ionicons } from '@expo/vector-icons'; 
import Home from '../screens/Home';
import Single from '../screens/ProductContainer/SingleProduct';
import Cart from '../screens/cartContainer/Cart';
import Checkout from '../screens/checkoutContainer/Checkout';
import WishListScreen from '../screens/WishListScreen';
import Login from '../screens/Account/Login';
import { useSelector } from 'react-redux';
import SingleOrder from '../screens/SingleOrder';
import Account from '../screens/Account/Account';
import OrderList from '../screens/OrderListContainer/OrderList';
import { useContextS } from '../store/context/AllContext';
import { GlobalStyles } from '../util/styles';
import SignUp from '../screens/Account/SignUp';
import Conversation from '../components/Chats/Conversation';
const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()


function NavigationCon() {
 

   
    function BottomNavigator() {
        return (  <BottomTab.Navigator    screenOptions={{
          headerStyle: { backgroundColor: 'black'},
          headerTintColor: 'white',
        
          tabBarActiveTintColor: '#f7bc0c',
          tabBarStyle: {backgroundColor: 'black'}, 
        
        }}>
            <BottomTab.Screen  name="Chats"  options={{
              title: 'Chats',
              tabBarIcon: ({color, size}) => <Ionicons name="chatbubble" size={size} color={color} />,
              tabBarBadge: 5,
              tabBarBadgeStyle: {backgroundColor: 'red', marginHorizontal: 5}
              }}   component ={Home} /> 
    
          
      
      
      
            <BottomTab.Screen  name="People"    options={{      
          tabBarIcon: ({color, size}) => <Ionicons name="ios-people-sharp" size={size} color={color} />,
            }} component ={Cart} />
        
        
        
       
        
        
      
            </BottomTab.Navigator>
        )
      
      }

      
    
    return (
        <NavigationContainer>
    
      <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'black'}, 
          headerTintColor: 'white',
          
      }}>
     
        <Stack.Screen  name="Nav"  component={BottomNavigator} options={{headerShown: false,}} />

      

        <Stack.Screen  name="Info" 
        options={({route}) => {
          const CatId = route.params.product.name
          return {
              title: CatId
          }; }} component={Single}   />
       
        
       
        
        <Stack.Screen  name="Checkout"  component={Checkout}  />
        <Stack.Screen  name="Conversation"  component={Conversation}  />

       

        <Stack.Screen  name="SingleOrder"  component={SingleOrder} />
     

       
        <Stack.Group screenOptions={{presentation: 'modal' ,headerStyle: {backgroundColor: GlobalStyles.colors.orange400},  }}  >
        <Stack.Screen  name="Login"   component={Login}  />
        <Stack.Screen  name="SignUp"   component={SignUp}  />
        </Stack.Group>

        <Stack.Screen  name="OrderList"  >
        {(props) => <OrderList   {...props} />}
        </Stack.Screen>



        </Stack.Navigator>
     
    
      </NavigationContainer >
        
       
    )
}

export default NavigationCon
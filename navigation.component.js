import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen }  from './home.component';
import { DetailsScreen } from './details.component';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props) => (
   <Icon {...props} name="home-outline" />
)
const PedidoIcon = (props) => (
   <Icon {...props} name="inbox-outline" />
)
const ArticuloIcon = (props) => (
   <Icon {...props} name="layers-outline" />
)
const ClienteIcon = (props) => (
   <Icon {...props} name="person-outline" />
)
const ComercioIcon = (props) => (
   <Icon {...props} name="shopping-cart-outline" />
)

const BottomTabBar = ({ navigation, state }) => (
   <SafeAreaView>
      <BottomNavigation
         selectedIndex={state.index}
         onSelect={index => navigation.navigate(state.routeNames[index])}>
         <BottomNavigationTab title="Inicio" icon={HomeIcon}/>
         <BottomNavigationTab title='Pedidos'  icon={PedidoIcon}/>
         <BottomNavigationTab disabled title='Articulos' icon={ArticuloIcon}/>
         <BottomNavigationTab disabled title='Clientes' icon={ClienteIcon}/>
         <BottomNavigationTab disabled title='Comercio' icon={ComercioIcon}/>
      </BottomNavigation>
   </SafeAreaView>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Pedidos' component={DetailsScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator/>
  </NavigationContainer>
);
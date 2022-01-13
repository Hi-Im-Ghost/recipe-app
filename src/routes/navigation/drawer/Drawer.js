import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import SearchNavigator from '../../../scenes/search'
import FavoriteNavigator from '../../../scenes/favorite'
import RecipeNavigator from '../../../scenes/recipe'
import ListNavigator from '../../../scenes/list'
import TimerNavigator from '../../../scenes/timer'
import ProfileNavigator from '../../../scenes/profile'
import AuthorsNavigator from '../../../scenes/authors'
import HeaderLeft from '../stacks/HeaderLeft'
import HeaderTitle from '../stacks/HeaderTitle'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter((item) => item.name !== 'Home')
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Search" component={SearchNavigator} />
    <Drawer.Screen
      name="Favorite"
      component={FavoriteNavigator}
      options={({ navigation }) => ({
        title: 'Favorite',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Drawer.Screen name="Recipe" component={RecipeNavigator} />
    <Drawer.Screen name="List" component={ListNavigator} />
    <Drawer.Screen name="Timer" component={TimerNavigator} />
    <Drawer.Screen name="Profile" component={ProfileNavigator} />
    <Drawer.Screen name="Authors" component={AuthorsNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator

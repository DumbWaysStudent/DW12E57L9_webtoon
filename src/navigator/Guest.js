import { createAppContainer } from 'react-navigation'
import { createStackNavigator }  from 'react-navigation-stack'

import Login from '../screen/main/auth/Login'

const Guest = createStackNavigator({
    Login : {
        screen : Login,
        navigationOptions : {
            header : null
        }
    }
})

export default createAppContainer(Guest)
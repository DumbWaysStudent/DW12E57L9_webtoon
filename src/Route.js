import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Guest from './navigator/Guest'
import User from './navigator/User'

const Route = createSwitchNavigator({
    Guest,
    User
})

export default createAppContainer(Route)
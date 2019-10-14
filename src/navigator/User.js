import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';
import Detail from '../screen/pages/Detail';
import MoreDetail from '../screen/pages/MoreDetail'
import EditProfile from '../screen/pages/EditProfile'
import AddCreation from '../screen/pages/AddCreation'
import AddButtonPress from '../screen/pages/AddButtonPress'
import CreateEps from '../screen/pages/CreateEps'
import EditWebtoon from '../screen/pages/EditWebtoon'
import EditEps from '../screen/pages/EditEps'

const User = createStackNavigator({
    BottomTabNavigator : {
        screen : BottomTabNavigator,
        navigationOptions :{
            header : null
        }
    },
    DetailStack: {
        screen : Detail,
        navigationOptions :{
            header : null
        }
    },
    MoreDetail:{
        screen:MoreDetail,
        navigationOptions:{
            header:null
        }
    },
    EditProfile:{
        screen:EditProfile,
        navigationOptions:{
            header:null
        }
    },
    AddCreation:{
        screen:AddCreation,
        navigationOptions:{
            header:null
        }
    },
    AddButtonPress:{
        screen:AddButtonPress,
        navigationOptions:{
            header:null
        }
    },
    CreateEps:{
        screen:CreateEps,
        navigationOptions:{
            header:null
        }
    },
    EditWebtoon:{
        screen:EditWebtoon,
        navigationOptions:{
            header: null
        }
    },
    EditEps:{
        screen:EditEps,
        navigationOptions:{
            header:null
        }
    }
})



export default createAppContainer(User)
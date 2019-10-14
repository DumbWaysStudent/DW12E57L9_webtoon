import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../screens/Login'
//import Detail from './../screens/Detail'
//import DetailEpisode from './../screens/DetailEpisode';

//import MyCreation from './../screens/MyCreation';
//import CreateWebtoon from './../screens/CreateWebtoon';
//import CreateEpisode from './../screens/CreateEpisode';
//import EditWebtoon from './../screens/EditWebtoon';

// without Bottom Tab Navigator
const HeaderNav = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
          header: null
      }),
    },
   

  });

export default createAppContainer(HeaderNav);
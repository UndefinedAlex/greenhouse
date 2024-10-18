// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MonitoringScreen from './src/screens/MonitoringScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Monitoring">
        <Stack.Screen name="Monitoring" component={MonitoringScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

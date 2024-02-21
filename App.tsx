import React, {useState, useEffect} from 'react';
import {
  Appearance,
  Button,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';

function AppPro() {
  const colorScheme = useColorScheme(); // device’s color scheme
  const [isDarkMode, setDarkMode] = useState(colorScheme === 'dark');
  let greetingText = isDarkMode ? 'Hello Dark Mode' : 'Hello Light Mode';

  useEffect(() => {
    // Update the dark mode state when the device's color scheme changes
    setDarkMode(colorScheme === 'dark');
  }, [colorScheme]); //agar colorScheme mai chaange aa raha hai run the function

  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? 'black' : 'white'},
      ]}>
      <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
        {greetingText}
      </Text>
      <Button title="Toggle Mode" onPress={() => setDarkMode(!isDarkMode)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  blackText: {
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
});

export default AppPro;

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button, useColorScheme } from 'react-native';

export default function Profile() {
  const systemTheme = useColorScheme(); // Detect the system theme (light or dark)

  // Use state to manage the theme, default to system theme
  const [theme, setTheme] = useState(systemTheme);

  // Update theme when system theme changes
  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  const toggleTheme = () => {
    // Toggle theme between light and dark
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Get styles based on the current theme
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/path-to-your-image.jpg' }}  // Replace with your image URL or local asset
        style={styles.profileImage}
      />
      <Text style={styles.name}>Sheen Michael C. Apal</Text>
      <Text style={styles.bio}>
        An active developer who enjoys learning new technologies, coding, and making contributions to open source.
      </Text>
      <Text style={styles.email}>Email: akosiapal4@gmail.com</Text>
      
      {/* Button to toggle between light and dark mode */}
      <View style={styles.buttonContainer}>
        <Button title="Dark Mode" onPress={toggleTheme} />
      </View>
    </View>
  );
}

// Function to define styles based on the current theme (light/dark)
function getStyles(theme: string | null | undefined) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme === 'dark' ? '#121212' : '#f5f5f5', // Dark mode background vs light mode background
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      color: theme === 'dark' ? '#fff' : '#000', // Dark mode text color vs light mode text color
    },
    bio: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 10,
      color: theme === 'dark' ? '#ddd' : '#333', // Lighter text color in dark mode
    },
    email: {
      fontSize: 14,
      color: theme === 'dark' ? '#bbb' : '#555', // Lighter gray for email text in dark mode
    },
    buttonContainer: {
      position: 'absolute',
      top: 20,
      right: 20,  // Position the button to the top-right corner
    },
  });
}

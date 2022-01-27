import { StyleSheet } from "react-native";

// some styles use "absolute" positioning, which might appear differently on different phones... need to test
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d8e6d8', //'#e2e9e2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo_text: {
      width: 220, 
      height: 220,
      position: 'absolute',
      bottom: 510,
      alignItems:'center',
      resizeMode: 'contain',
    },
    logo: {
      width: 5, 
      height: 5,
      position: 'absolute',
      top: 40,
      right: 40,
      padding: 10,
      alignItems:'center',
    },
    button: {
      height: '5%',
      position: 'absolute',
      bottom: 314,
      left: 45,
      width: 150,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: '#7d947a',
    },
    update_button: {
      height: '15%',
      width: 150,
      margin: 50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: '#7d947a',
    },
    return_button: {
      height: 100,
      width: 150,
      position: 'absolute',
      top: 70,
      left: 20,
      borderRadius: 4,
      backgroundColor: '#d8e6d8',
    },
    metric_button: {
      width: 5, 
      height: 5,
      position: 'absolute',
      top: 40,
      right: 40,
      padding: 10,
      alignItems:'center',
      borderRadius: 90,
      backgroundColor: '#7d947a',
    },
    text: {
      fontSize: 16,
      lineHeight: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
      letterSpacing: .5,
      color: 'white',
    },
    update_text: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 'bold',
      alignSelf: 'center',
      letterSpacing: .5,
      color: 'white',
    },
    metric_text: {
      fontSize: 10,
      bottom: 4,
      alignContent: 'center',
      color: 'white',
      position: 'absolute',
    },
    return_text: {
      color: '#7d947a', 
      fontWeight: 'bold', 
      fontSize: 24,
    },
    update_time_text: {
      color: '#008500',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 15,
      right: 15,
    },
    input: {
      width: 300,
      height: 40,
      margin: 8,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 8,
    },
    displayBox: {
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 120,
      width: 390,
      height: 350,
      margin: 8,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#f4f6f3',
      backgroundColor: '#f4f6f3',
    },
  });

  export default styles;
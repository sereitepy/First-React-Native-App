import { SafeAreaView, StyleSheet, Text, Image, Alert } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Hello, Baby Girl ♥️</Text>
      <Text style={styles.longText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore
        vero, eaque saepe, ab quia nihil nesciunt officia, inventore
        consequuntur quis minima cumque id minus ducimus non. Illum, ratione
        consequatur.
      </Text>
      <Text style={styles.button} onPress={() => Alert.alert('Text Pressed')}>
        Press here
      </Text>
      <Image style={styles.localImage} source={require('./assets/favicon.png')} />
      <Image style={styles.outsideImage}source={{ uri: 'https://picsum.photos/200/300' }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  paragraph: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 50,
  },
  longText: {
    color: 'white',
    fontSize: 20,
    padding: 50,
  },
  button: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: 'pink',
    padding: 15,
    borderBlockColor: 'white',
    borderRadius: 20,
    shadowRadius: 20,
  },
  localImage: {
    margin: 30,
    width: 50,
    height: 50,
  },
  outsideImage: {
    width: 300,
    height: 300,
    borderRadius: 150
  }
})

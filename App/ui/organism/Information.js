import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Left,
  Header,
  Button as NativeButton,
  Body,
  Title,
  Right,
  Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Information extends React.Component {
  render() {
    let imageSrc = 'https://www.yasmall.ae/media/2814/fastfood.jpg';

    return (
      <Container>
        <Header style={{backgroundColor: '#fff'}}>
          <Left>
            <NativeButton
              transparent
              onPress={() => this.props.navigation.goBack()}>
              <Icon name="close" size={40} color={'#000'} />
            </NativeButton>
          </Left>
          <Body>
            <Title style={{color: '#000'}}>INFO</Title>
          </Body>
          <Right />
        </Header>

        <View>
          <Image
            source={{
              uri: imageSrc,
            }}
            style={styles.image}
          />
          <View style={{}}>
            <Text>Ingredients</Text>
          </View>
        </View>
      </Container>
    );
  }
}
export default Information;

const styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '45%',
    marginBottom: '2%',
    marginLeft: '2%',
  },
  image: {
    width: '100%',
    height: '60%',
  },
});

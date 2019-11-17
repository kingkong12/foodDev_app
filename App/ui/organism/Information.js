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
    const {item} = this.props.navigation.state.params;
    console.log('state', this.props.navigation.state.params);
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
              uri: item.url,
            }}
            style={styles.image}
          />
          <View style={styles.ItemDetails}>
            <Text style={styles.headingText}> {item.itemName} </Text>
            <Text style={styles.calorieTextStyle}>
              {' '}
              Calories: {item.calories}{' '}
            </Text>
            <View style={styles.divider} />
            <Text style={styles.descriptionTextTitle}>Description </Text>
            <Text style={styles.description}>{item.information}</Text>
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
  calorieTextStyle: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  ItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  headingText: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  descriptionTextTitle: {
    fontSize: 20,
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
  },
  description: {
    marginTop: 20,
    marginLeft: 15,
  },
});

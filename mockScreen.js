import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Container, Header, Content, Title, Card, CardItem} from 'native-base';

class MOCKSCREEN extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Menu</Title>
        </Header>
        <Content>
          <Card style={styles.red}>
            <CardItem cardBody bordered>
              <Image
                source={{
                  uri:
                    'https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/Grab-n-Go-Egg-Breakfast-Box2-CMS.jpg',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem header bordered>
              <Text> Breakfast </Text>
            </CardItem>
          </Card>

          <Card style={styles.red}>
            <CardItem cardBody bordered>
              <Image
                source={{
                  uri:
                    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/2048x1024/landscape-1507827432-beef-taco-boats-delish-1.jpg?resize=480:*',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem header bordered>
              <Text> Mexican </Text>
            </CardItem>
          </Card>

          <Card style={styles.red}>
            <CardItem cardBody bordered>
              <Image
                source={{
                  uri:
                    'https://www.ciefferagusa.it/wp-content/uploads/2016/08/patate-surgelate-792x600.jpg',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem header bordered>
              <Text> Fries </Text>
            </CardItem>
          </Card>

          <Card style={styles.red}>
            <CardItem cardBody bordered>
              <Image
                source={{
                  uri:
                    'https://www.palmbeachillustrated.com/wp-content/uploads/sites/78/2019/08/Indianspread.jpg',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem header bordered>
              <Text> Indian </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    backgroundColor: '#FF0000',
  },
});

export default MOCKSCREEN;

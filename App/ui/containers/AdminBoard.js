import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, TextInput, Paragraph, Snackbar} from 'react-native-paper';
import {connect} from 'react-redux';
// actions
import {loggedIn, logOut} from '../../actions/userAuthenticate';

class AdminBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      snackBarVisiblity: false,
    };
  }

  formValidation = () => {
    let {loginDetails} = this.props.adminLogin;
    if (
      loginDetails.userName === this.state.userName &&
      loginDetails.password === this.state.password
    ) {
      this.setState({userName: '', password: ''});
      this.props.loggedIn();
    } else {
      this.setState({snackBarVisiblity: true});
    }
  };

  renderFields = () => (
    <Card>
      <Card.Title title="Admin Login" />
      <Card.Content>
        <Paragraph>This Login is only for Admin</Paragraph>
        <View style={styles.textFieldsAlignment}>
          <TextInput
            style={{marginBottom: 12}}
            label="User"
            value={this.state.userName}
            onChangeText={text => this.setState({userName: text})}
            maxLength={10}
          />
          <TextInput
            secureTextEntry={true}
            label="Password"
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            maxLength={10}
          />
        </View>
      </Card.Content>
      <Card.Actions>
        <Button
          color={'tomato'}
          labelStyle={{color: 'white'}}
          style={{flex: 1, marginRight: 8}}
          mode="contained"
          onPress={() => this.setState({userName: '', password: ''})}>
          Cancel
        </Button>
        <Button
          color={'tomato'}
          labelStyle={{color: 'white'}}
          style={{flex: 1}}
          mode="contained"
          onPress={this.formValidation}>
          Ok
        </Button>
      </Card.Actions>
    </Card>
  );

  render() {
    if (this.props.adminLogin.isLoggedIn === true) {
      return (
        <View style={styles.container}>
          <Text> Welcome back Admin </Text>
          <Text> You can now edit items in Menu section.</Text>
          <Button
            color={'tomato'}
            labelStyle={{color: 'white'}}
            //style={}
            mode="contained"
            onPress={() => this.props.logOut()}>
            Log out
          </Button>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {this.renderFields()}
        <Snackbar
          style={{
            backgroundColor: '#DC143C',
          }}
          visible={this.state.snackBarVisiblity}
          duration={700}
          onDismiss={() => this.setState({snackBarVisiblity: false})}>
          UserName or Password is Incorret !
        </Snackbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 8,
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
  },
  textFieldsAlignment: {
    marginTop: 12,
    marginBottom: 12,
  },
});

const mapStateToProps = state => {
  return {
    adminLogin: state.adminLogin,
  };
};

export default connect(
  mapStateToProps,
  {loggedIn, logOut},
)(AdminBoard);

/*
TO DO :
wiring with redux
form validations.
  - form validation
*/

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Card,
  TextInput,
  Paragraph,
  Title,
  Snackbar,
} from 'react-native-paper';
import {connect} from 'react-redux';
import {
  loggedIn,
  logOut,
  setAdminCredentails,
} from '../../actions/userAuthenticate';
import {basceApiUrl} from '../../api/baseUrl';
import axios from 'axios';

class AdminBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      password: '',
      snackBarVisiblity: false,
      snackBar: {
        visiblity: false,
        snackBarmessage: '',
      },
    };
  }

  componentDidMount() {
    let itemUrl = `${basceApiUrl}/Admin`;
    axios
      .get(itemUrl)
      .then(resp => this.props.setAdminCredentails(resp.data))
      .catch(error => {
        console.log(error);
      });
  }

  formValidation = () => {
    let {loginDetails} = this.props.adminLogin;
    console.log('loginDetails', loginDetails.userName);
    if (
      loginDetails.userName === this.state.userName &&
      loginDetails.password === this.state.password
    ) {
      this.setState({userName: '', password: ''}, () => {
        this.toggleSnackBar(true, ' You have successfully logged In !');
      });
      this.props.loggedIn();
    } else {
      this.toggleSnackBar(true, 'UserName or Password is Incorret !');
      //this.setState({snackBarVisiblity: true});
    }
  };

  toggleSnackBar = (status, messgae) => {
    this.setState({
      ...this.state,
      snackBar: {
        ...this.state.snackBar,
        visiblity: status || false,
        snackBarmessage: messgae || '',
      },
    });
  };

  logoutAdmin = () => {
    this.toggleSnackBar(true, 'You have succefssfully Loged out');
    this.props.logOut();
  };

  renderSnackBar = props => {
    return (
      <Snackbar
        style={{
          backgroundColor: '#DC143C',
        }}
        visible={this.state.snackBar.visiblity}
        duration={900}
        onDismiss={() => this.toggleSnackBar()}>
        {this.state.snackBar.snackBarmessage}
      </Snackbar>
    );
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
          <Card>
            <Card.Content>
              <Title> Welcome Admin </Title>
              <Paragraph> You can now edit items in Menu section.</Paragraph>
              <Button
                color={'tomato'}
                labelStyle={{color: 'white'}}
                style={styles.logOutButtonStyle}
                mode="contained"
                onPress={() => this.logoutAdmin()}>
                Log out
              </Button>
            </Card.Content>
          </Card>
          {this.renderSnackBar()}
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {this.renderFields()}
        {this.renderSnackBar()}
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
  logOutButtonStyle: {
    marginTop: 16,
  },
});

const mapStateToProps = state => {
  return {
    adminLogin: state.adminLogin,
  };
};

export default connect(
  mapStateToProps,
  {loggedIn, logOut, setAdminCredentails},
)(AdminBoard);

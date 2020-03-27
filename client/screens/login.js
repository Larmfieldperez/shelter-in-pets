import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { loginAuth } from '../store/user';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    if (email === '') {
      alert('Email is required');
    } else if (password === '') {
      alert('Password is required');
    } else {
      await this.props.loginAuth(email, password, navigation);
      this.setState({
        email: '',
        password: '',
      });
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter email address"
              placeholderTextColor="#333"
              value={email}
              onChangeText={value => this.handleChange('email', value)}
            />
          </View>
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter password"
              placeholderTextColor="#333"
              secureTextEntry={true}
              value={password}
              onChangeText={value => this.handleChange('password', value)}
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.handleLogin()}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <Button
            title="Not a user?"
            onPress={() => this.props.navigation.navigate('signup')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAuth: (email, password, navigation) => {
      dispatch(loginAuth(email, password, navigation));
    },
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formWrapper: {
    width: '80%',
  },
  formRow: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#ddd',
    height: 40,
    paddingHorizontal: 10,
    color: '#333',
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  loginText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

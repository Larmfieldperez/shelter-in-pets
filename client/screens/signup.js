import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { signupAuth } from '../store/user';

class SignupScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      zipcode: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSignup() {
    const { email, password, zipcode } = this.state;
    this.props.signupAuth(email, password, zipcode);
  }

  render() {
    const { email, password, zipcode } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
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
          <View style={styles.formRow}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter zipcode"
              placeholderTextColor="#333"
              value={zipcode}
              onChangeText={value => this.handleChange('zipcode', value)}
            />
          </View>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.handleSignup()}
          >
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signupAuth: (email, password, zipcode) => {
      dispatch(signupAuth(email, password, zipcode));
    },
  };
};

const Signup = connect(null, mapDispatchToProps)(SignupScreen);
export default Signup;

//Style
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

  signupButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
  },
  signupText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

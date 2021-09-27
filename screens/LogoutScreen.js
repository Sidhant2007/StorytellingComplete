import { View, Text } from "react-native";
import * as React from "react";
import firebase from "firebase/app";
require("@firebase/auth");

export default class Logout extends React.Component {
  componentDidMount() {
    firebase.auth.signOut();
  }
  render() {
    return <View>Logout</View>;
  }
}

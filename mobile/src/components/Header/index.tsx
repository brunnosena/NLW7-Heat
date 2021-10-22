import React from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { UserPhoto } from "../UserPhoto";

import LogoSvg from "../../assets/logo.svg";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <UserPhoto imageUri="https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg" />
      </View>
    </View>
  );
}

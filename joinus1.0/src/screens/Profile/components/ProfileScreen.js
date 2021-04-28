import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { AuthContext } from "../../../components/context";
import axios from "axios";
import colors from "../../../assets/theme/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  CALENDAR,
  FAVORITES,
  MYPOST,
  SETTING,
  TECHNICALSUPPORT,
  EDITPROFILE,
  API_URL,
} from "../../../constants/routeNames";

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  const [news, setNews] = useState([]);

  const authAxios = axios.create({
    baseURL: API_URL,
  });
  useEffect(() => {
    getData();
    console.log(news);
  }, []);

  const getData = async () => {
    const userToken = await AsyncStorage.getItem("user_token");
    const result = authAxios
      .get(`/user`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(async function (response) {
        setNews(response.data.user);

        console.log(news);
        console.log(response.data.user.email);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.titleBarText}>
          <Text style={{ fontSize: 20, color: "#555555" }}>Profile</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2, height: 1, backgroundColor: "#A88B78" }} />
        </View>

        <View style={style.header}>
          <View style={style.avatarView}>
            <Image
              style={style.avatarUser}
              source={require("../../../assets/image/djoni.jpg")}
            ></Image>
          </View>
          <View style={style.infoUser}>
            <Text style={style.headerNameText}>{news.name}</Text>
            <Text style={style.headerEmailText}>{news.email}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(EDITPROFILE)}>
              <Text style={style.headerButtonText}>Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.body}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(FAVORITES);
              }}
            >
              <Text style={style.textButton}>Favorites</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="heart"
              color={colors.buttonColor}
              size={26}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(CALENDAR);
              }}
            >
              <Text style={style.textButton}>Calendar</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(TECHNICALSUPPORT);
              }}
            >
              <Text style={style.textButton}>Technical Support</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              style={style.touchbutton}
              onPress={() => {
                navigation.navigate(SETTING);
              }}
            >
              <Text style={style.textButton}>Setting</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(MYPOST);
              }}
            >
              <Text style={style.textButton}>My Post</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>

          <TouchableOpacity
            style={style.buttonSignOut}
            onPress={() => {
              signOut();
            }}
          >
            <Text style={style.buttonTextSignOut}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#40B3A2",
  },
  content: {
    marginLeft: 30,
    alignItems: "center",
    marginRight: 30,
  },
  titleBarText: {
    flexDirection: "row",
    width: windowWidth - 70,
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  header: {
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarView: {
    justifyContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  avatarUser: {
    width: 140,
    height: 140,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: colors.buttonColor,
  },
  infoUser: {
    flex: 1,
  },
  headerNameText: {
    fontSize: 28,
    color: colors.white,
    marginBottom: 10,
  },
  headerEmailText: {
    fontSize: 14,
    color: colors.white,
  },
  headerButtonText: {
    marginTop: 10,
    fontSize: 14,
    color: colors.white,
  },
  body: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  viewButton: {
    justifyContent: "space-between",
    width: windowWidth - 70,
    flexDirection: "row",
    marginBottom: 3,
    paddingRight: 20,
    marginTop: 3,
  },
  textButton: {
    color: colors.white,
    fontSize: 24,
  },
  iconsButton: {
    marginTop: 3,
  },
  buttonSignOut: {
    marginTop: 30,
    backgroundColor: "#E27D5F",
    width: 250,
    height: 45,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonTextSignOut: {
    color: "white",
    fontSize: 18,
  },
});

export default ProfileScreen;

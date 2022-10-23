import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacityComponent,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {APIAllDataUser} from '../../Api/API';
import ProfilePic from '../../Assets/cat.png';
const Stories = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    Axios.get(APIAllDataUser)
      .then(res => {
        let arr = [];
        arr = res.data.data;
        setUserData(arr);
        //        console.log(userData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.story} source={ProfilePic} />
          <Text>You</Text>
        </View>
        {userData.map((val, idx) => {
          return (
            <View key={val.id} style={{alignItems: 'center'}}>
              <Image style={styles.story} source={{uri: val.avatar}} />
              <Text>
                {val.first_name.length > 6
                  ? String(val.first_name).slice(0, 4).toLowerCase() + '...'
                  : val.first_name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default Stories;

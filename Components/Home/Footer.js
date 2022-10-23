import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Home from '../../Assets/home2.png';
import Search from '../../Assets/search.png';
import Video from '../../Assets/video.png';
import Bag from '../../Assets/bag.png';
import Profile from '../../Assets/cat.png';

const Footer = () => {
  return (
    <View>
      <IconFooter />
    </View>
  );
};

const IconFooter = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: 'grey',
        borderTopWidth: 0.15,
      }}>
      <Image style={styles.iconHome} source={Home} />
      <Image style={styles.icon} source={Search} />
      <Image style={styles.icon} source={Video} />
      <Image style={styles.icon} source={Bag} />
      <Image style={styles.iconProfile} source={Profile} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginVertical: 5,
    marginHorizontal: 20,
    resizeMode: 'contain',
  },
  iconHome: {
    width: 25,
    height: 25,
    marginVertical: 5,
    marginHorizontal: 20,
    resizeMode: 'contain',
  },
  iconProfile: {
    width: 25,
    height: 25,
    marginVertical: 5,
    marginHorizontal: 20,
    resizeMode: 'contain',
    borderColor: 'grey',
    borderRadius: 25 / 2,
  },
});
export default Footer;

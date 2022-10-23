import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import InstagramLogo from '../../Assets/instagramlogo.png';
import Heart from '../../Assets/heart.png';
import More from '../../Assets/more.png';
import Send from '../../Assets/send.png';
import Messanger from '../../Assets/messanger.png';
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={InstagramLogo} />
      </TouchableOpacity>
      <View style={styles.itemsContainer}>
        <TouchableOpacity>
          <Image style={styles.iconLeft} source={More} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.iconLeft} source={Heart} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image style={styles.icon} source={Messanger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  itemsContainer: {
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  iconLeft: {
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: 'contain',
    marginRight: 18,
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

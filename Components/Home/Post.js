import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Divider} from 'react-native-elements';
import Axios from 'axios';
import {APIAllDataUser} from '../../Api/API';
import PostPhoto from '../../Assets/postphoto.png';
import PostPhoto2 from '../../Assets/postphoto2.png';
import Heart from '../../Assets/heart.png';
import Chat from '../../Assets/chat.png';
import Send from '../../Assets/send.png';
import Mark from '../../Assets/mark.png';
import ProfilePicture from '../../Assets/cat.png';
const Post = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    Axios.get(APIAllDataUser)
      .then(res => {
        let arr = [];
        arr = res.data.data;
        setUserData(arr);
        // console.log(userData);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      {userData.map((val, idx) => {
        return (
          <View key={idx}>
            <Divider width={1} orientation="vertical"></Divider>
            <PostHeader post={val} />
            <PostImage post={val} />
            <View>
              <PostFooter post={val} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const PostHeader = ({post}) => {
  // console.log(post);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: post.avatar}} style={styles.story} />
        <Text style={{color: 'black', marginLeft: 5, fontWeight: '700'}}>
          {post.first_name}
        </Text>
      </View>
      <Text style={{fontWeight: '900', color: 'black'}}>...</Text>
    </View>
  );
};

const PostImage = ({post}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 450,
        alignContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={(post.id * 1) % 2 == 0 ? PostPhoto : PostPhoto2}
        style={{height: '100%', width: '50%'}}
      />
    </View>
  );
};

const PostFooter = ({post}) => {
  return (
    <View>
      <View style={{marginBottom: 2}}>
        <IconImage />
      </View>
      <PostFeedbackFooter post={post} />
    </View>
  );
};

const PostFeedbackFooter = ({post}) => {
  return (
    <View style={{marginLeft: 15, flexDirection: 'column'}}>
      <Text
        style={{
          color: 'black',
          fontWeight: '700',
          marginBottom: 3,
        }}>
        {post.id} likes
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: '700'}}>
          {post.last_name}
        </Text>
        <Text style={{color: 'black', marginLeft: 5, marginBottom: 3}}>
          {post.avatar.length > 30
            ? post.avatar.slice(0, 30) + ' ... more'
            : post.avatar}
        </Text>
      </View>
      <View style={{marginBottom: 8}}>
        <Text>View all {post.id} comments</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginBottom: 8,
        }}>
        <View style={{marginRight: 8}}>
          <Image source={ProfilePicture} style={styles.storyComment} />
        </View>
        <View>
          <Text>Add a comment...</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 15}}>
        <Text>{post.id} hours ago - </Text>
        <Text style={{color: 'black'}}>See transaltion</Text>
      </View>
    </View>
  );
};

const IconImage = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={styles.leftFooterIconContainer}>
        <TouchableOpacity>
          <Image style={styles.footerIcon} source={Heart} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.footerIcon} source={Chat} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.footerIcon} source={Send} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            fontWeight: '900',
            color: 'grey',
            fontSize: 24,
          }}>
          ...
        </Text>
      </View>
      <View style={styles.rightFooterIconContainer}>
        <TouchableOpacity>
          <Image style={styles.footerIcon} source={Mark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  storyComment: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
  },
  footerIcon: {
    height: 24,
    width: 24,
    marginRight: 14,
  },
  leftFooterIconContainer: {
    flexDirection: 'row',
    width: '32%',
    marginVertical: 10,
    marginLeft: 10,
  },
  rightFooterIconContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'flex-end',
    marginRight: 10,
    marginVertical: 10,
  },
});
export default Post;

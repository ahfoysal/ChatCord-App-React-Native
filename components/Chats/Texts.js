import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import TimeAgo from 'react-native-timeago';

const ChatBubble = ({ message, isMe, sendTime }) => {
    // console.log(sendTime)
  return (
    <Pressable style={[isMe ? styles.chatBubbleRight : styles.chatBubbleLeft]}>
      {!isMe && (
        <Image
          style={styles.profilePic}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg',
          }}
        />
      )}
      <View style={[isMe ? styles.chatBubbleRightContent : styles.chatBubbleLeftContent]}>
        <Text style={styles.chatText}>{message}</Text>
        {/* <Text style={styles.sendTime}>{format(sendTime)}</Text> */}
        <TimeAgo time={sendTime}  />
      </View>
    </Pressable>
  );
};

const ConversationView = ({chat}) => {
    // console.log((chat.createdAt))
  return (
    <View style={styles.container}>
      <ChatBubble message={chat.text} isMe={chat.senderId === "645c687070bc289277a4ab8a" ?  false : true} sendTime={chat.createdAt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 10,
  },
  chatBubbleLeft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  chatBubbleRight: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginRight: 15,
  },
  chatBubbleLeftContent: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  chatBubbleRightContent: {
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    padding: 10,
    maxWidth: '80%',
  },
  chatText: {
    fontSize: 16,
    marginBottom: 5,
  },
  sendTime: {
    fontSize: 12,
    color: '#A9A9A9',
    alignSelf: 'flex-end',
  },
});

export default ConversationView;

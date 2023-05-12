import { FlatList, Image, Pressable, StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, SafeAreaView } from "react-native";
import { GlobalStyles } from "../../util/styles";
import { useContextS } from "../../store/context/AllContext";
import ConversationView from "./Texts";
import { useEffect, useState } from "react";
import axios from "axios";
import { AntDesign, Ionicons  } from '@expo/vector-icons'; // <-- import the needed icon

function Conversation({ chat, navigation }) {
  const [chats, setChats] = useState([]);
  let { isLoading, isDark, allProducts } = useContextS();

  const chatFetch = async () => {
    try {
      const response = await axios.get('http://192.168.31.12:5000/api/v1/messages/645e5c0610b7ea9a4a3617f8');
      setChats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    chatFetch();
  }, []);

  const handleLoadMore = () => {
    console.log('reached');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={{ backgroundColor: isDark ? GlobalStyles.colors.darkTheme : GlobalStyles.colors.lightTheme, flex: 1 }}
      >
        <FlatList
          data={chats.reverse()}
          onEndReached={handleLoadMore}
          keyExtractor={(chat, index) => index.toString()}
          renderItem={(chat) => (
            <ConversationView navigation={navigation} chat={chat.item} />
          )}
          inverted={true}
          contentContainerStyle={styles.contentContainerStyle}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' ,  marginHorizontal: 5}}>
          <Pressable style={styles.icon}>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </Pressable>
          <TextInput
            autoCorrect={false}
            autoCompleteType="off"
            placeholder="Type your message..."
            style={styles.input}
          />
          <Pressable style={styles.icon}>
            <Ionicons  name="send" size={24} color="white" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Conversation;

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-end',
   
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20  ,
    color: 'white',
    padding: 10,
    margin: 10,
    // marginBottom: Platform.OS === "ios" ? 20 : 10,
    flex: 1, // <-- added to make the TextInput take up all available space
  },
  icon: {
    marginHorizontal: 5, // <-- added for spacing between icons and input
  },
});

import React from "react";
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { GlobalStyles } from "../util/styles";
import { useContextS } from "../store/context/AllContext";
import ChatList from "../components/Chats/ChatList";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

function Home({navigation}) {
    const [chats, setChats] = useState([]);

    let { isLoading, isDark, allProducts } = useContextS();
    
    const chatFetch = async () => {
        try {
            const response = await axios.get('http://192.168.31.12:5000/api/v1/conversation/645e5b6910b7ea9a4a3617ee');
            setChats(response.data)
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        chatFetch()
    }, [])

    const handleSearchPress = () => {
        // navigate to the search screen
    }

    return (
        <SafeAreaView style={{ backgroundColor: isDark ? GlobalStyles.colors.darkTheme : GlobalStyles.colors.lightTheme, flex: 1, paddingHorizontal: 5, paddingBottom: 30 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}>
                <Ionicons name="search-outline" size={24} color="gray" style={{ padding: 5 }} />
                <TextInput
                    placeholder="Search..."
                    style={{
                        flex: 1,
                        padding: 10,
                        color: 'gray'
                    }}
                />
            </View>

            <FlatList
              data={chats}
              keyExtractor={(chat, index) => index}
              renderItem={(chat) => <ChatList navigation={navigation} chat={chat} />}
            />
        </SafeAreaView>
    )
}

export default Home;

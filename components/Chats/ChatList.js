
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../util/styles";

function ChatList({ chat, navigation }) {

    return (
        <Pressable onPress={() => navigation.navigate('Conversation')}>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ height: 50, width: 50, marginHorizontal: 20, borderRadius: 25}}>
                    <Image style={{height: 50, width: 50, borderRadius: 25 }} source={{ uri: "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" }} />
                    <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'green', borderRadius: 6, paddingHorizontal: 4, paddingVertical: 1 }}>
                        <Text style={{ fontSize: 10, color: GlobalStyles.colors.lightTheme }}>16m</Text>
                    </View>

                </View>

                <View style={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Text style={{ fontSize: 16, color: GlobalStyles.colors.lightTheme, fontWeight: 'bold' }}>User 1</Text>
                    <Text style={{ fontSize: 12, color: GlobalStyles.colors.gray100 }}>Last Message.   5 May</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ChatList
const styles = StyleSheet.create({

    innerContainer: {
        margin: 6
    }
})
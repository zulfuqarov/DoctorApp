import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ChatView from '../../components/Chat/ChatView'
import { ScrollView } from 'react-native-gesture-handler'
const Chat = () => {
    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate("Message")}>
                    <ChatView />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    }
})
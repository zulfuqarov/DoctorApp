import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const initialMessages = [
    {
        id: '1',
        text: 'Merhaba, nasılsın?',
        sender: 'other',
        time: '10:00',
    },
    {
        id: '2',
        text: 'İyiyim, teşekkürler! Sen nasılsın?',
        sender: 'me',
        time: '10:01',
    },
    {
        id: '3',
        text: 'Ben de iyiyim. Bugün planın var mı?',
        sender: 'other',
        time: '10:02',
    },
]

const Message = () => {
    const [messages, setMessages] = useState(initialMessages)
    const [messageText, setMessageText] = useState('')
    const insets = useSafeAreaInsets()
    const flatListRef = useRef(null)  // FlatList için ref oluşturuyoruz

    const sendMessage = () => {
        if (messageText.trim()) {
            const newMessage = {
                id: (messages.length + 1).toString(),
                text: messageText,
                sender: 'me',
                time: new Date().toLocaleTimeString().slice(0, 5),
            }
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, newMessage]
                // Mesaj ekledikten sonra son mesaja kaydırmak için scrollToEnd çağrısı yapıyoruz
                flatListRef.current.scrollToEnd({ animated: true })
                return updatedMessages
            })
            setMessageText('')
        }
    }

    const renderItem = ({ item }) => {
        const isMe = item.sender === 'me'
        return (
            <View style={[styles.messageContainer, isMe ? styles.me : styles.other]}>
                {!isMe && (
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/300' }}
                        style={styles.avatar}
                    />
                )}
                <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleOther]}>
                    <Text style={styles.messageText}>{item.text}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{
            flex: 1, paddingBottom: insets.bottom, backgroundColor: '#f4f6f8',
        }}>
            <View style={styles.container}>
                <FlatList
                    ref={flatListRef}  // FlatList'in ref'ini bağlıyoruz
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 10 }}
                    onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}  // İçerik değiştiğinde son mesaja kaydır
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Mesaj yaz..."
                        value={messageText}
                        onChangeText={setMessageText}
                        returnKeyType="send"
                        onSubmitEditing={sendMessage}
                    />
                    <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                        <Text style={styles.sendText}>Gönder</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f8',
        padding: 10,
    },
    messageContainer: {
        flexDirection: 'row',
        marginVertical: 6,
        alignItems: 'flex-end',
    },
    me: {
        justifyContent: 'flex-end',
    },
    other: {
        justifyContent: 'flex-start',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
    },
    bubble: {
        maxWidth: '75%',
        padding: 12,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    bubbleMe: {
        backgroundColor: '#007aff',
        marginLeft: 50,
        borderTopRightRadius: 0,
    },
    bubbleOther: {
        backgroundColor: '#007aff',
        borderTopLeftRadius: 0,
    },
    messageText: {
        color: '#fff',
        fontSize: 16,
    },
    time: {
        color: '#d0d0d0',
        fontSize: 12,
        textAlign: 'right',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        height: hp("6%"),
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: wp("4%"),
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007aff',
        paddingVertical: wp("4%"),
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    sendText: {
        color: '#fff',
        fontSize: 16,
    },
})

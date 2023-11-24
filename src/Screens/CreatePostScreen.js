import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from "react";

const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Saleheen",
  };
  


const CreatePostScreen = () => {

    const [description, setDescription] = useState("Hello World");
    const onSubmit = () => {
        console.warn("Post Submitted!");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: user.image}} style={styles.postImage}/>
                <Text style={styles.Text}>{user.name}</Text>
            </View>
            <TextInput 
            value={description}
            onChangeText={setDescription} 
            placeholder="What's on your mind?" 
            multiline/>
            
            <View style={styles.btnContainer}>
                <Button title="Post" onPress={onSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 30,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        marginBottom: 10,
    },
    postImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    Text: {
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    btnContainer:{
        marginTop: "auto"
    }

});

export default CreatePostScreen;
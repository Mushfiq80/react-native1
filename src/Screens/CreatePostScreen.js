import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";

const user = {
    id: "u1",
    image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Saleheen",
};



const CreatePostScreen = () => {

    const [description, setDescription] = useState("Hello World");
    const [image, setImage] = useState(null);

    const navigation = useNavigation();
    const onSubmit = () => {
        console.warn("Post Submitted!");
        navigation.goBack();
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.image }} style={styles.postImage} />
                <Text style={styles.Text}>{user.name}</Text>
                <Entypo
                    onPress={pickImage}
                    name="images"
                    size={24}
                    color="limegreen"
                    style={styles.icon}
                />
            </View>

            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="What's on your mind?"
                multiline />

            <Image source={{ uri: image }} style={styles.image} />

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
    header: {
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
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    Text: {
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    btnContainer: {
        marginTop: "auto"
    },
    icon: {
        marginLeft: "auto",
    },

});

export default CreatePostScreen;
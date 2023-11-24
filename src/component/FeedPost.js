import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import likeImage from '../../assets/images/like.png';
import { useState } from "react";
import {
    Entypo,
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

const FeedPost = ({ post }) => {


    const [isLiked, setIsLiked] = useState(false);
    // console.warn("This is a error")  
    return (


        <View style={styles.post}>
            {/* HEADER................. */}
            <View style={styles.header}>
                <Image source={{ uri: post.User.image }} style={styles.profileImage} />
                <View>
                    <Text style={styles.name}>{post.User.name}</Text>
                    <Text style={styles.subtitle}>{post.createdAt}</Text>
                </View>
                <Entypo name="dots-three-horizontal" size={18} color="black" style={styles.icon} />
            </View>

            {/* Body ........................  */}
            <View style={styles.body}>
                {post.description && <Text style={styles.description}>{post.description}</Text>}
                {post.image && <Image source={{ uri: post.image }} style={styles.image} />}
            </View>

            {/* Footer....................  */}
            <View style={styles.footer}>
                {/* UpperRow  */}
                <View style={styles.upperRow}>
                    <Image source={likeImage} style={styles.likeIcon} />
                    <Text style={styles.likedBy}>
                        Elon Musk and {post.numberOfLikes} others
                    </Text>
                    <Text style={styles.shareNum}>
                        {post.numberOfShares} Shares
                    </Text>
                </View>
                {/* Button Rows  */}
                <View style={styles.btnRow}>
                    <Pressable onPress={() => setIsLiked(!isLiked)} style={styles.iconBtn}>

                        <AntDesign
                            name="like2"
                            size={18}
                            color={isLiked ? "royalblue" : "gray"} />
                        <Text style={[styles.iconBtnText,
                        { color: isLiked ? "royalblue" : "gray" },]}>
                            Like
                        </Text>
                    </Pressable>


                    <View style={styles.iconBtn}>
                        <FontAwesome5 name="comment-alt" size={16} color="gray" />
                        <Text style={styles.iconBtnText}>Comment</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <MaterialCommunityIcons
                            name="share-outline"
                            size={24}
                            color="gray"
                        />
                        <Text style={styles.iconBtnText}>Share</Text>
                    </View>
                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    post: {
        width: "100%",
        marginVertical: 10,
        backgroundColor: '#fff'
    },
    header: {
        width: "100%",
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    name: { fontWeight: '700' },
    subtitle: {
        color: 'gray'
    },
    icon: {
        marginLeft: "auto",
    },
    // .........body........
    description: {
        paddingHorizontal: 10,
        lineHeight: 20,
        letterSpacing: .3,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    // Footer
    footer: {
        paddingHorizontal: 10,
    },
    likeIcon: {
        height: 20,
        width: 20,
        marginRight: 5,
    },
    upperRow: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,

        borderBottomColor: 'lightgrey'
    },
    likedBy: {
        color: 'grey'
    },
    shareNum: {
        marginLeft: 'auto',
        color: 'grey'
    },

    // Button section
    btnRow: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    iconBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBtnText: {
        marginLeft: 5,
        color: 'grey',
        fontWeight: "500",
    },


});

export default FeedPost;

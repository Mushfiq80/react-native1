import { FlatList } from "react-native";
import FeedPost from "../component/FeedPost";
import posts from "../../assets/data/posts.json";

const FeedScreens = () =>{
    return(
        <FlatList
          data={posts}
          renderItem={({ item }) => <FeedPost post={item} /> }
      />
    )
    
}

export default FeedScreens;
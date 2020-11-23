import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

interface IProps {}

const IndexScreen: React.FunctionComponent<IProps> = () => {
  const { data, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={style.row}>
              <Text style={style.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={style.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;

import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

interface IProps {
  navigation: any;
}

const BlogDetailScreen: React.FC<IProps> = ({ navigation }) => {
  const { data } = useContext(Context);
  const blogId: number = navigation.getParam("id");

  const blogTitle = data.find((item) => item.id === blogId)?.title;
  console.log(blogTitle);
  return <Text> {blogTitle}</Text>;
};

const style = StyleSheet.create({});

export default BlogDetailScreen;

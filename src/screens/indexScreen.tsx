import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

interface IProps {}

const IndexScreen: React.FunctionComponent<IProps> = () => {
  const value = useContext(BlogContext);

  return <Text>Index Screen Test: {value}!!</Text>;
};

const style = StyleSheet.create({});

export default IndexScreen;

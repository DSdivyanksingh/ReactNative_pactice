import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native"

const Lists = () =>{
    const names=[
        {
            index:"1",
            name: "react"
        },
        {
            index:"2",
            name: "react native"
        },
        {
            index:"3",
            name: "exprees"
        },
        {
            index:"4",
            name: "node"
        },
        {
            index:"5",
            name: "Html"
        },
        {
            index:"6",
            name: "css"
        }
    ]
    return(
        <FlatList
        style={styles.liststyle}
        keyExtractor={(key) => {
            return key.index
        }}
        // numColumns={3}
        horizontal
        inverted
        showsHorizontalScrollIndicator={false}
         data={names} renderItem={(element) => {
            console.log(element.item.name)
            return (
                <Text style={styles.list}>{element.item.name}</Text>
            );
        }}/>
    );
}
const styles=StyleSheet.create({
    list:{
        fontSize:40,
        padding:30,
        backgroundColor:"skyblue",
        margin:20,
        color: 'black'
    },
    liststyle:{
        textAlign:"center",
        margin: 20,
        padding: 10,
    },
});
export default Lists;
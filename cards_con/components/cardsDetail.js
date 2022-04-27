import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";

const Card = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Netflix card</Text>
            <View style={styles.poster}>
            <Image style={styles.img} source={{uri: "https://www.pinkvilla.com/files/all_dead_main_1.jpg"}}/>
            
            <View style={styles.posterInfo}>
                <Text style={styles.posterTitle}>All Of Us Dead</Text>
                <Text style={styles.posterText}>After a failed science experiment, a local high school is overrun with zombies, and the trapped students struggle to survive. With no food or water, and communication cut-off by the government.</Text>
            </View>
            <Button style={styles.btn} title="Watch Now"
            onPress={() => Linking.openURL("https://www.netflix.com/in/title/81237994")}/>
            </View>
            
        </View>
    );
}

const styles=StyleSheet.create({
    img: {
        height: undefined,
        width: "100%",
        aspectRatio:1,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
    header: {
        fontSize: 30,
        marginBottom: 20,
        color: "red",
        fontFamily: Cochin,
    },
    poster:{
        width: 250,
        alignItems: "center",
        borderWidth: 1,
    },
     posterInfo: {
         alignItems:'center',
         marginVertical: 10,
     },
    posterTitle: {
        fontSize: 20,
        marginBottom: 10,
        color: "black"
    },
    posterText: {
        paddingHorizontal: 25,
        fontSize:16,
        marginBottom: 10,
        color: "black",
    },
});
export default Card;
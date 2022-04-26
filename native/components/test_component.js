import React from "react";
import {Text, TextInput, View, StyleSheet} from "react-native"

const Texts = ()=> {
    return(
        <View>
            <Text style={styles.testtext}>Test export/import(reuse) of components</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    testtext:{
        textAlign:"center",
        color: "green",
        fontSize: 30
        // marginTop: 50,

    }
})
export default Texts;
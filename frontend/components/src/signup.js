import React, { useState } from "react";
import axios from "axios";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const image = { uri: "https://www.athletadesk.com/wp-content/uploads/2016/08/join-background.jpg" };
const Signup = () => {
    const [names, setName] = useState("")
    const [emails, setEmail] = useState("")
    const [number, setNumber] = useState(null)
    const[passwords, setPassword] = useState("")
    const Data = (e) =>{
        e.preventDefault()
        console.log(names, emails, number, passwords )
    axios.post("http://localhost8000",{
        name:names,
        email:emails,
        phone:number,
        password:passwords
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    return (
        <View style={styles.mainContainer} >
            <ImageBackground source={image} resizeMode="cover" style={styles.img}>
                <Text style={styles.headerStyle}>Signup</Text>
                <View style={styles.secondContainer}>
                    <Text style={[styles.name, styles.common]}>Name</Text>
                    <TextInput style={styles.inputStyle} autoCorrect={false} required={true} autoCapitalize="none" defaultValue={names} onChangeText={newName => setName(newName)}/>

                    <Text style={[styles.email, styles.common]}>Email</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} required={true} defaultValue={emails} onChangeText={newEmail => setEmail(newEmail)}/>

                    <Text style={[styles.phone, styles.common]}> Phone no.</Text>
                    <TextInput style={styles.inputStyle} autoCorrect={false} required={true} autoCapitalize="none" keyboardType="numeric" defaultValue={number} onChangeText={newNumber => setNumber(newNumber)} />

                    <Text style={[styles.password, styles.common]}> Password</Text>
                    <TextInput style={styles.inputStyle} autoCorrect={false} required={true} secureTextEntry={true} autoCapitalize="none" defaultValue={passwords} onChangeText={newPassword => setPassword(newPassword)} />

                </View>

                <TouchableOpacity style={styles.btn}><Text style={[styles.btnText, styles.common]} onPress={Data}>Signup</Text></TouchableOpacity>

            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        // paddingHorizontal: 30,
        // paddingTop: 30,
        // backgroundColor: "#fff",
        // justifyContent:"center",
        // alignItems:"center",
    },
    headerStyle: {
        fontSize: 25,
        fontWeight: "bold",
        // justifyContent:"center",
        alignSelf: "center"
    },
    secondContainer: {
        width: "80%",
        // marginVertical:"10%",
        marginHorizontal: "10%",
        marginTop: 15,
    },
    common: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 7,
        color: "black",

    },
    inputStyle: {
        borderColor: "black",
        borderRadius: 1,
        borderWidth: 1,
        height: 35,
        color: "white",
    },
    btn: {
        alignSelf: "center",
        // fontSize:25,
        // fontWeight:"bold",
        backgroundColor: "blue",
        marginVertical: 10,

    },
    btnText: {
        color: "white",
    },
    img: {
        flex: 1,
        justifyContent: "center",
    },
});
export default Signup;
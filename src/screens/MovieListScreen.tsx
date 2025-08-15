import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import {SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import movies from '../data/movies.json'
import MovieRow from "../components/MovieRow";
const MovieListScreen = () => {

    const navigation = useNavigation();

    return(
        <SafeAreaProvider>
            <SafeAreaView 
            style={styles.container}
            >
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",}}>
                <Text style={styles.title}>Filmes</Text>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("MovieFormScreen")}
                    style={{position:"absolute", right:15, top:15}}>
                        <Text style={{color:"#EB4435", fontSize: 25, fontWeight:"bold"}}>+</Text>
                    </TouchableOpacity>
                
                </View>
            
                <FlatList
                    style={styles.list}
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("MovieDetailsScreen")}
                        >
                            <MovieRow movie={item}/>
                        </TouchableOpacity>
                        
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: "#ebebeb" }} />}
                    >
                </FlatList> 
            </SafeAreaView>           
        </SafeAreaProvider>

    )
}

export default MovieListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebebeb",
        padding: 8,
        
    },
    list: {
        marginVertical: 16,
        marginHorizontal: 8,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
        borderRadius: 12,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        margin: 10,
    },
})

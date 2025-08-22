import React, { useState, useLayoutEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { s, vs } from "react-native-size-matters"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { useRoute, useNavigation } from "@react-navigation/native"
import { Movie } from "../components/MovieRow"


const MovieFormScreen = () => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [duration, setDuration] = useState("");
    const [categories, setCategories] = useState("");
    const [poster, setPoster] = useState("");
    const [synopsis, setSynopsis] = useState("");

    const route = useRoute()
    const navigation = useNavigation()

    const movie = route.params?.movie ?? null;

    useLayoutEffect(() => {
        navigation.setOptions({ title: movie == null ? "Cadastro" : "Edição" });
        if (movie) {
            setTitle(movie.title || "")
            setRating(movie.rating.toString() || "")
            setDuration(movie.duration || "")
            setCategories(movie.categories || "")
            setPoster(movie.poster || "")
            setSynopsis(movie.synopsis || "")
        }
    }, [movie])

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ padding: 20 }}>
                    
                        {/* TITULO */}
                        <Text style={styles.sectionTitle}>MovieFormScreen</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Escreva o nome do filme"
                            value={title}
                            onChangeText={setTitle}
                        
                        />
                        {/* Nota e Duração */}
                        <Text style={styles.sectionTitle}>Nota e Duração</Text>
                        <View style={{ flexDirection: "row", flex:1, gap:10 }}>
                            <TextInput
                                style={styles.input}
                                placeholder="Nota"
                                value={rating}
                                onChangeText={setRating}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Duração"
                                value={duration}
                                onChangeText={setDuration}
                            />
                        </View>
                        {/* Categorias */}
                        <Text style={styles.sectionTitle}>Categorias</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Categorias"
                            value={categories}
                            onChangeText={setCategories}
                        />
                        {/* Poster */}
                        <Text style={styles.sectionTitle}>Poster</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Poster"
                            value={poster}
                            onChangeText={setPoster}
                        />
                        <TextInput
                            style={[styles.input, { height: vs(120) }]}
                            placeholder="Sinopse"
                            value={synopsis}
                            multiline
                            textAlignVertical='top'
                            onChangeText={setSynopsis}
                        />

                </ScrollView>

                {/*Botão de salvar*/}
                <View style={styles.buttonArea}>
                    <TouchableOpacity onPress={() => {}} style={styles.button}>
                        <Text style={{color: "#FFF", fontWeight: "bold", fontSize: s(18)}}>
                            {movie ? "Salvar Alterações" : "Cadastrar Filme"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

export default MovieFormScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f7",
    },
    sectionTitle: {
        fontSize: s(12),
        color: "#8d8d8d",
    },
    input: {
        flex: 1,
        height: vs(42),
        backgroundColor: "#fff",
        borderRadius: s(8),
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 10,
    },
    buttonArea: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        height: 86,
    },
    button: {
        flex: 1,
        backgroundColor: "#eb4435",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: s(8),
    },
})
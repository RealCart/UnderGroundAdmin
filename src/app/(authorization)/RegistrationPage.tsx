import { ThemedText } from '@/src/components/themedComponents/ThemedText';
import { ThemedView } from '@/src/components/themedComponents/ThemedView';
import { styles } from '@/src/styles/styles'
import {ThemedDefaultButton} from "@/src/components/themedComponents/ThemedDefaultButton";
import {scale} from "react-native-size-matters";
import {useRouter} from "expo-router";
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import {Formik} from "formik";
import {AuthenticationValidation} from "@/src/constants/Validations";
import {View, Text, TouchableOpacity, useColorScheme} from "react-native";
import {ThemedInput} from "@/src/components/themedComponents/ThemedInput";
import {ChevronLeft} from "@/src/components/icons/AuthorizationIcons";
import {ThemedDatepicker} from "@/src/components/themedComponents/ThemedDatepicker";
import React from "react";
import {ThemedRadioButton} from "@/src/components/themedComponents/ThemedRadioButton";

interface FormValues {
    name: string;
    surname: string;
    dateOfBirth: Date;
    gender: string;
}

export default function RegistrationPage() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const today = new Date();

    async function handleLogin(values: FormValues) {
        console.log("asd")
        router.push('/AppleHealthPage');
    }

    return (
        <ThemedMainView>
            <ThemedView style={[styles.containerWithPadding]}>
                <Formik
                    initialValues={{
                        name: "",
                        surname: "",
                        dateOfBirth: today,
                        gender: "",
                    }}
                    style={{flex: 1}}
                    validationSchema={AuthenticationValidation}
                    onSubmit={(values) => handleLogin(values)}
                >
                    {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          setFieldValue,
                          values,
                          errors,
                          touched,
                    }) => (
                        <View style={styles.container}>
                            <View style={styles.container}>
                                <TouchableOpacity onPress={() => router.back()} style={{paddingRight: scale(15), marginRight: "auto", marginBottom: scale(10)}}>
                                    <ChevronLeft stroke={colorScheme === "light" ? "black" : "white"} />
                                </TouchableOpacity>
                                <ThemedText type="subtitle" style={{marginBottom: scale(5)}}>Создать аккаунт</ThemedText>

                                <View style={{width: "100%"}}>
                                    <View>
                                        <View>
                                            <ThemedInput
                                                label="Имя"
                                                onChangeText={handleChange("name")}
                                                onBlur={handleBlur("name")}
                                                value={values.name}
                                                placeholder="Введите имя"
                                            />
                                            {touched.name && errors.name && (
                                                <Text style={styles.errorText}>
                                                    {errors.name}
                                                </Text>
                                            )}
                                        </View>
                                        <View>
                                            <ThemedInput
                                                label="Фамилия"
                                                onChangeText={handleChange("surname")}
                                                onBlur={handleBlur("surname")}
                                                value={values.surname}
                                                placeholder="Введите фамилию"
                                            />
                                            {touched.surname && errors.surname && (
                                                <Text style={styles.errorText}>
                                                    {errors.surname}
                                                </Text>
                                            )}
                                        </View>
                                        <View>
                                            <ThemedDatepicker
                                                value={values.dateOfBirth}
                                                label="Дата рождения"
                                                onChange={(date) => handleChange("dateOfBirth")(date.toISOString())}
                                            />
                                        </View>
                                        <Text style={{ color: '#787878', marginBottom: scale(5), marginTop: scale(10) }}>Пол</Text>
                                        <View style={styles.radioGroup}>
                                            <ThemedRadioButton
                                                label="Женский"
                                                selected={values.gender === "female"}
                                                onPress={() => setFieldValue("gender", "female")}
                                            />
                                            <ThemedRadioButton
                                                label="Мужской"
                                                selected={values.gender === "male"}
                                                onPress={() => setFieldValue("gender", "male")}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <ThemedDefaultButton style={[styles.defaultButton, {bottom: 0}]} event={handleSubmit}>
                                <ThemedText type="buttonText">Продолжить</ThemedText>
                            </ThemedDefaultButton>
                        </View>
                    )}
                </Formik>
            </ThemedView>
        </ThemedMainView>
    );
}
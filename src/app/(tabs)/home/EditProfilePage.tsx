import {Image, StyleSheet, Platform, View, ScrollView, Text, TouchableOpacity, useColorScheme} from 'react-native';;
import { styles } from '@/src/styles/styles'
import {BranchCard} from "@/src/components/home/branches/BranchCard";
import {router} from "expo-router";
import {PageHeader} from "@/src/components/PageHeader";
import ThemedMainView from "@/src/components/themedComponents/ThemedMainView";
import {ThemedText} from "@/src/components/themedComponents/ThemedText";
import {scale} from "react-native-size-matters";
import PhoneInputMask from "@/src/components/PhoneInputMask";
import {ThemedInput} from "@/src/components/themedComponents/ThemedInput";
import {ThemedRadioButton} from "@/src/components/themedComponents/ThemedRadioButton";
import React from "react";
import {AuthenticationValidation, UserUpdate} from "@/src/constants/Validations";
import {Formik} from "formik";
import {ThemedDatepicker} from "@/src/components/themedComponents/ThemedDatepicker";

interface FormValues {
    phone: string;
    email: string;
    name: string;
    surname: string;
    dateOfBirth: Date;
    gender: string;
}

export default function EditProfilePage() {
    const colorScheme = useColorScheme();
    const today = new Date();

    async function handleLogin(values: FormValues) {
        console.log("asd")
        router.back();
    }

    return (
        <ThemedMainView edges={['top', 'left', 'right']}>
            <PageHeader title={'Мои данные'} />
            <Formik
                initialValues={{
                    phone: "",
                    email: "",
                    name: "",
                    surname: "",
                    dateOfBirth: today,
                    gender: "",
                }}
                style={{flex: 1}}
                validationSchema={UserUpdate}
                onSubmit={(values) => handleLogin(values)}
            >
                {({
                      setFieldValue,
                      values,
                      handleChange,
                      errors,
                      touched,
                  }) => (
            <ScrollView>
                <View style={[styles.containerWithPadding, {gap: scale(10)}]}>
                    <View style={{paddingVertical: scale(15)}}>
                        <ThemedText type={'label'} style={{fontSize: 16, marginBottom: scale(10)}}>Контакты</ThemedText>
                        <View>
                            <ThemedText type={'label'}>Телефон</ThemedText>
                            <PhoneInputMask style={{marginVertical: scale(5)}} />
                        </View>
                        <ThemedInput label={'Email'} placeholder={'mail@gmail.com'}/>
                    </View>

                    <View style={{borderTopWidth: 1, borderTopColor: '#706F6F', paddingVertical: scale(15)}}>
                        <ThemedText type={'label'} style={{fontSize: 16}}>Личные данные</ThemedText>
                        <ThemedInput label={'Имя'} placeholder={'mail@gmail.com'}/>
                        <ThemedInput label={'Фамилия'} placeholder={'mail@gmail.com'}/>
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

                        <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? 'white' : 'black', borderRadius: 10, padding: scale(10), marginVertical: scale(20)}}>
                            <ThemedText type={'buttonText'} style={{color: colorScheme === 'dark' ? 'black' : 'white',}}>Удалить аккаунт</ThemedText>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            )}
            </Formik>
        </ThemedMainView>
    );
}
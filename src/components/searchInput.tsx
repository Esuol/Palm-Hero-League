import React, { Component, useState } from 'react';
import {
    TextInput,
    Image,
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    searchBox: {
        flex: 1,
        height: 35,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#e9eaec',
        borderRadius: 5,
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 7,
        marginRight: 7,
        width: 14,
        height: 14,
    },
    inputText: {
        alignSelf: 'center',
        marginTop: 0,
        flex: 1,
        height: 30,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 14,
        lineHeight: 16,
        textAlignVertical: 'center',
        textDecorationLine: 'none'
    }
});

interface Props {
    placeholder: string;
    handleSearch: (e: string) => void;
    value: string;
}

const SearchInput: React.FC<Props> = (props: Props) => {
    const {
        placeholder,
        value,
        handleSearch
    } = props;

    return (
        <View style={styles.searchBox}>
            <Image
                source={require('../assets/images/search.png')}
                style={styles.searchIcon} />
            <TextInput
                style={styles.inputText}
                value={value}
                onChangeText={handleSearch}
                autoCapitalize='none'  //设置首字母不自动大写
                underlineColorAndroid={"transparent"}  //下划线颜色设置为透明
                placeholderTextColor={'#aaa'}  //设置占位符颜色
                placeholder={placeholder}
            />
        </View>
    );
};

export default SearchInput;


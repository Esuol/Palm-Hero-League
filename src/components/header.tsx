import React, {useState} from 'react';
import { connect} from 'react-redux';
import { View, Text, StyleSheet, Image,  } from 'react-native';
import { WingBlank, Icon } from '@ant-design/react-native';
import SearchInput from '~/components/searchInput';
import Tabs from './tab';
import { SelectArea } from '~/store/action/common';

const S = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        zIndex: 1,
        backgroundColor: '#fff',
    },
    wrap: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 10
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    shopWarp: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        marginTop: 8
    },
    shoppingCart: {
        width: '10%',
        marginTop: 6
    },
    recordWrap: {
        flex: 1,
        flexDirection: 'row',
    },
    pickArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        marginTop: 0,
        color: '#a97937'
    },
    recordIcon: {
        marginTop: 0,
    },
    recordEllipsis: {
        marginTop: 10,
    },
});

interface Props {
    tabs?: { title: string; key: string }[];
    tabActiveColor?: string;
    name: string;
    width: number;
    areaState: {
        areaState: boolean;
    };
    selectArea: any;
}

interface State {
    areaReducer: {
        areaState: {
            areaState: boolean;
        };
    };
}

const mapStateToProps = (state: State) => {
    return {
        areaState: state.areaReducer.areaState
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    selectArea: (areaState: boolean) => dispatch(SelectArea(areaState))
});

const Header: React.FC<Props> = (props: Props) => {
    const {
        tabs,
        name,
        width,
        tabActiveColor,
        areaState,
        selectArea
    } = props;

    const [ condition, setCondition] = useState<string>('');

    const handleSearch = (e: string) => {
        setCondition(e);
    };

    const switchArea = () => {
        selectArea(!areaState);
    };

    return (
        <View style={S.header}>
            <WingBlank size="md" style={S.wrap}>
                <View style={{width: `${(100 - width)/2}%`}}>
                    <Image
                        style={S.image}
                        source={{uri: 'https://img2.woyaogexing.com/2019/10/31/9ff4fd9097c64e8097c5e63f8b3ca1c3!400x400.jpeg'}}
                    />
                </View>
                <View style={{width: `${width}%`, marginTop: -5 }}>
                    {tabs &&  <Tabs tabs={tabs} tabActiveColor={tabActiveColor} /> }
                    {name === 'shop' &&
                        <View style={S.shopWarp}>
                            <SearchInput
                                value={condition}
                                placeholder="找你喜欢的商品"
                                handleSearch={handleSearch} />
                            <Icon style={S.shoppingCart} name="shopping-cart" size="md" color="#a97937" />
                        </View>
                    }
                    {
                        name === 'record' &&
                        <View style={S.recordWrap}>
                            <View  style={S.pickArea}>
                                <Text style={S.text} onPress={switchArea}>黑色玫瑰</Text>
                                <Icon
                                    style={S.recordIcon}
                                    name={areaState ? "caret-down" : "caret-up"}
                                    size="md"
                                    color="#a97937"
                                    onPress={switchArea} />
                            </View>
                            <Icon
                                style={S.recordEllipsis}
                                name="ellipsis" size="md"
                                color="#a97937" />
                        </View>
                    }
                </View>
                <View style={{width: `${(100 - width)/2}%`, alignItems: "flex-end",}}>
                    <Icon style={S.icon} name="wechat" size="lg" color="#a97937" />
                </View>
            </WingBlank>
        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

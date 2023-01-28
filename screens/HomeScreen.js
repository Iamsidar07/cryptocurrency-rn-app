import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import MyText from '../MyText'

const HomeScreen = () => {

    const { width, height } = Dimensions.get("screen");
    const rate = 90;

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: "10%" }}>
                {/* header  */}
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Image source={{ uri: "https://img.icons8.com/ios-glyphs/512/apps.png" }} resizeMode="contain" style={{ width: 40, height: 40, }} />
                    <View style={{ padding: 5, backgroundColor: "#E6E6E6", borderRadius: 50, alignItems: "center", justifyContent: "center" }}><Image source={{ uri: "https://i.pinimg.com/564x/03/c4/14/03c414053ad2bece0a6140c3419b194b.jpg" }} resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 50 }} /></View>
                </View>
                {/* wallets  */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
                    marginVertical: 20,
                }}>
                    {/* walllet  */}
                    <TouchableOpacity>
                        <View style={{
                            width: width * 0.9,
                            height: 220,
                            padding: 20,
                            backgroundColor: "#F94892",
                            borderRadius: 20,
                            marginRight: 10,
                            justifyContent: "space-evenly",
                        }}>
                            <MyText style={{
                                fontSize: 20,
                                color: "white"
                            }} text={"My Wallet"} />
                            <View>
                                <MyText style={{
                                    fontSize: 20,
                                    color: "white"
                                }} text={"Balance"} />
                                <MyText style={{
                                    fontSize: 35,
                                    fontFamily: "Poppins-Medium",
                                    color: "white",
                                }} text={"$1357.00"} />
                                <MyText style={{
                                    color: "white",
                                    marginBottom: 15,
                                }} text={"/usd"} />

                            </View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/card-wallet.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                    <MyText style={{
                                        marginLeft: 5,
                                        color: "white",
                                    }} text={"Deposit"} />
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/money.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                        <MyText style={{
                                            marginLeft: 5,
                                            color: "white",
                                        }} text={"Withdraw"} />
                                    </View>


                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/link.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                        <MyText style={{
                                            marginLeft: 2,
                                            color: "white",
                                        }} text={"More"} />
                                    </View>


                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            width: width * 0.9,
                            height: 220,
                            padding: 20,
                            backgroundColor: "#FF7F3F",
                            borderRadius: 20,
                            marginRight: 10,
                            justifyContent: "space-evenly",
                        }}>
                            <MyText style={{
                                fontSize: 20,
                                color: "white"
                            }} text={"My Wallet"} />
                            <View>
                                <MyText style={{
                                    fontSize: 20,
                                    color: "white"
                                }} text={"Balance"} />
                                <MyText style={{
                                    fontSize: 35,
                                    fontFamily: "Poppins-Medium",
                                    color: "white",
                                }} text={"$1357.00"} />
                                <MyText style={{
                                    color: "white",
                                    marginBottom: 15,
                                }} text={"/usd"} />

                            </View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/card-wallet.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                    <MyText style={{
                                        marginLeft: 5,
                                        color: "white",
                                    }} text={"Deposit"} />
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/money.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                        <MyText style={{
                                            marginLeft: 5,
                                            color: "white",
                                        }} text={"Withdraw"} />
                                    </View>


                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/link.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                        <MyText style={{
                                            marginLeft: 2,
                                            color: "white",
                                        }} text={"More"} />
                                    </View>


                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{
                            width: width * 0.9,
                            height: 220,
                            padding: 20,
                            backgroundColor: "#89CFFD",
                            borderRadius: 20,
                            marginRight: 10,
                            justifyContent: "space-evenly",
                        }}>
                            <MyText style={{
                                fontSize: 20,
                                color: "white"
                            }} text={"My Wallet"} />
                            <View>
                                <MyText style={{
                                    fontSize: 20,
                                    color: "white"
                                }} text={"Balance"} />
                                <MyText style={{
                                    fontSize: 35,
                                    fontFamily: "Poppins-Medium",
                                    color: "white",
                                }} text={"$1357.00"} />
                                <MyText style={{
                                    color: "white",
                                    marginBottom: 15,
                                }} text={"/usd"} />

                            </View>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/card-wallet.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                    <MyText style={{
                                        marginLeft: 5,
                                        color: "white",
                                    }} text={"Deposit"} />
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/money.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                        <MyText style={{
                                            marginLeft: 5,
                                            color: "white",
                                        }} text={"Withdraw"} />
                                    </View>


                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/link.png" }} resizeMode="contain" style={{ width: 30, height: 30, }} />
                                        <MyText style={{
                                            marginLeft: 2,
                                            color: "white",
                                        }} text={"More"} />
                                    </View>


                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>


                </ScrollView>
                {/* for you  */}
                <MyText text={"For You"} style={{ marginVertical: 10, fontFamily: "Poppins-Medium", fontSize: 18 }} />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: width,
                    justifyContent: "space-between",
                    paddingHorizontal: 5,

                }}>
                    <TouchableOpacity style={{
                        padding: 15,
                        backgroundColor: '#F94892',
                        width: "30%",
                        height: 120,
                        justifyContent: "space-between",
                        borderRadius: 20,
                    }}>
                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/open-book.png" }} resizeMode="contain" style={{ width: 40, height: 40, }} />
                        <MyText style={{
                            color: "white",
                            fontSize: 12,
                        }} text={"Learn crypto Earn crypto"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        padding: 15,
                        backgroundColor: '#E6E6E6',
                        width: "30%",
                        height: 120,
                        justifyContent: "space-between",
                        borderRadius: 20,
                    }}>
                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/topic-push-notification.png" }} resizeMode="contain" style={{ width: 40, height: 40, }} />
                        <MyText style={{
                            // color: "white"
                            fontSize: 12,
                        }} text={"DCA Simulation"} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        padding: 15,
                        backgroundColor: '#E6E6E6',
                        width: "30%",
                        height: 120,
                        justifyContent: "space-between",
                        borderRadius: 20,
                        marginRight: 15,
                    }}>
                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/conference-call.png" }} resizeMode="contain" style={{ width: 40, height: 40, }} />
                        <MyText style={{
                            // color: "white"
                            fontSize: 12,
                        }} text={"Join community"} />
                    </TouchableOpacity>




                </View>
                {/* Popular Cryptos  */}
                <MyText text={"Popular Cryptos"} style={{ marginVertical: 10, fontFamily: "Poppins-Medium", fontSize: 18 }} />

                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 5,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/money-bag-bitcoin.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Bitcoin"} />
                            <MyText style={{ color: "gray", }} text={"BTC/USD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate >= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate >= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate >= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 4,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/color/512/ethereum.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Etherium"} />
                            <MyText style={{ color: "gray", }} text={"ETH/USD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate <= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate <= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate <= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 5,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/external-black-fill-lafs/512/external-Binance-cryptocurrency-black-fill-lafs.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Binance"} />
                            <MyText style={{ color: "gray", }} text={"BUSD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate >= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate >= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate >= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 4,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/fluency/512/cardano.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Cardano"} />
                            <MyText style={{ color: "gray", }} text={"ADA"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate <= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate <= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate <= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 5,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/money-bag-bitcoin.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Bitcoin"} />
                            <MyText style={{ color: "gray", }} text={"BTC/USD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate >= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate >= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate >= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 4,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/color/512/ethereum.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Etherium"} />
                            <MyText style={{ color: "gray", }} text={"ETH/USD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate <= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate <= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate <= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 5,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/external-black-fill-lafs/512/external-Binance-cryptocurrency-black-fill-lafs.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Binance"} />
                            <MyText style={{ color: "gray", }} text={"BUSD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate >= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate >= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate >= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 4,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/fluency/512/cardano.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Cardano"} />
                            <MyText style={{ color: "gray", }} text={"ADA"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate <= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate <= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate <= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 5,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/3d-fluency/512/money-bag-bitcoin.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Bitcoin"} />
                            <MyText style={{ color: "gray", }} text={"BTC/USD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate >= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate >= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate >= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 4,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/color/512/ethereum.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Etherium"} />
                            <MyText style={{ color: "gray", }} text={"ETH/USD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate <= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate <= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate <= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 5,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/external-black-fill-lafs/512/external-Binance-cryptocurrency-black-fill-lafs.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Binance"} />
                            <MyText style={{ color: "gray", }} text={"BUSD"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate >= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate >= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate >= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: 15,
                    backgroundColor: '#E6E6E6',
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                    height: 80,
                    justifyContent: "space-between",
                    borderRadius: 15,
                    marginTop: 4,

                }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Image source={{ uri: "https://img.icons8.com/fluency/512/cardano.png" }} resizeMode="contain" style={{ width: 50, height: 50, }} />
                        <View style={{ marginLeft: 5, }}>
                            <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"Cardano"} />
                            <MyText style={{ color: "gray", }} text={"ADA"} />
                        </View>
                    </View>
                    <View >
                        <MyText style={{ fontSize: 18, fontWeight: "500" }} text={"$ 20174.34"} />
                        <View style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "center"
                        }}>

                            {
                                rate <= 0 ? <Image source={{ uri: "https://img.icons8.com/fluency-systems-filled/512/triangle.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} /> : <Image source={{ uri: "https://img.icons8.com/emoji/512/red-triangle-pointed-down-emoji.png" }} resizeMode="contain" style={{ width: 15, height: 15, }} />
                            }
                            <MyText text={`${rate <= 0 ?
                                "+" + rate : "-" + rate}`} style={{ color: rate <= 0 ? "green" : "red", marginLeft: 5, }} />
                        </View>
                    </View>

                </TouchableOpacity>

            </ScrollView>
            {/* footer  */}
            <View style={{ backgroundColor: "white", padding: 10, flexDirection: "row", alignItems: "center", justifyContent: 'space-around', }}>
                <Image source={{
                    uri: "https://img.icons8.com/ios-glyphs/512/home-page.png"
                }} resizeMode="contain" style={{ width: 25, height: 25, }} />
                <Image source={{ uri: "https://img.icons8.com/ios-glyphs/512/hearts.png" }} resizeMode="contain" style={{ width: 25, height: 25, }} />
                <Image source={{ uri: "https://img.icons8.com/ios/512/save.png" }} resizeMode="contain" style={{ width: 25, height: 25, }} />
                <Image source={{ uri: "https://img.icons8.com/windows/512/share-rounded.png" }} resizeMode="contain" style={{ width: 25, height: 25, }} />

            </View>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 45,
        paddingHorizontal: 10,
        justifyContent: "space-around"
    }
})

import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import MyText from '../MyText'
import Wallets from '../components/Wallets';
import Header from '../components/Header';
import Feature from '../components/Feature';
import Crypto from '../components/Crypto';
import Footer from '../components/Footer';
import Constants from 'expo-constants';


const HomeScreen = () => {
    const width=Dimensions.get('window').width;
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: "50%" }}>
                {/* header  */}
                <Header/>
                {/* wallets  */}
                <ScrollView horizontal snapToInterval={width * 0.95}  showsHorizontalScrollIndicator={false} contentContainerStyle={{
                    marginVertical: 20,
                }}>
                    {/* walllet  */}
                  <Wallets />
                  <Wallets />
                  <Wallets />

                </ScrollView>
                {/* for you  */}
                <MyText text={"For You"} style={{ marginVertical: 20,  fontSize: 18 }} />
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",

                }}>
                    <Feature bg='#303030' imgUrl='https://img.icons8.com/3d-fluency/512/open-book.png' text='Learn crypto Earn crypto'/>
                    <Feature bg='#1E1E1E' imgUrl='https://img.icons8.com/3d-fluency/512/topic-push-notification.png' text='DCA Simulation'/>
                    <Feature bg='#1E1E1E' imgUrl='https://img.icons8.com/3d-fluency/512/conference-call.png' text='Join community'/>
                 
                </View>
                {/* Popular Cryptos  */}
                <MyText text={"Popular Cryptos"} style={{ marginVertical: 20, fontSize: 18 }} />
                <Crypto coinName='Etherium' coinUrl='https://img.icons8.com/color/512/ethereum.png' coinSymbol='ETH/USD' currentValue='29753.05' rate={2}/>
                <Crypto coinName='Binance' coinUrl='https://img.icons8.com/external-black-fill-lafs/512/external-Binance-cryptocurrency-black-fill-lafs.png' coinSymbol='BUSD' currentValue='29753.05' rate={-2}/>
                <Crypto coinName='Cardano' coinUrl='https://img.icons8.com/fluency/512/cardano.png' coinSymbol='ADA' currentValue='29753.05' rate={2}/>

             
          
            </ScrollView>
            {/* footer  */}
            <Footer/>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0E0E0E',
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 10,
        // justifyContent: "space-around"
    }
})

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Cluster, clusterApiUrl, Connection, PublicKey, Keypair } from '@solana/web3.js';
import { encodeURL, createQR } from '@solana/pay';
import BigNumber from 'bignumber.js';
import { establishConnection } from './establishConnection';
import { simulateCheckout } from './simulateCheckout';
import { MERCHANT_WALLET } from './constants1';

export function elipsify(str = '', len = 4) {
  if (str.length > 30) {
    return (
      str.substring(0, len) +
      '...' +
      str.substring(str.length - len, str.length)
    );
  }
  return str;
}

const App = () => {
  async function main() {

    console.log("Let's simulate a Solana Pay flow ... \n");
    let paymentStatus: string;

    console.log('1. ✅ Establish connection to the cluster');
    const connection = await establishConnection();
    console.log('\n2. 🛍 Simulate a customer checkout \n');
    const { label, message, memo, amount, reference } = await simulateCheckout();
    console.log('3. 💰 Create a payment request link \n');
    const url = encodeURL({ recipient: MERCHANT_WALLET, amount, reference, label, message, memo });
    console.log(url, "!")
  }
  useEffect(() => {
    main()
    // const amount = new BigNumber(20);
    // const reference = new Keypair().publicKey;
    // const label = 'Jungle Cats store';
    // const message = 'Jungle Cats store - your order - #001234';
    // const memo = 'JC#4098';

    // /**
    //  * Create a payment request link
    //  *
    //  * Solana Pay uses a standard URL scheme across wallets for native SOL and SPL Token payments.
    //  * Several parameters are encoded within the link representing an intent to collect payment from a customer.
    //  */
    // console.log('3. 💰 Create a payment request link \n');
    // const url = encodeURL({ recipient, amount, reference, label, message, memo });
    // const qrCode = createQR(url);
    // console.log(qrCode, "qr")
  })

  return (
    <SafeAreaView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

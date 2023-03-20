import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ZakatCalculator = ({ navigation }) => {
    const [silver, setSilver] = useState(0);
    const [gold, setGold] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [currency, setCurrency] = useState('BDT');
    const [currencyRate, setCurrencyRate] = useState(84.88); // exchange rate of USD to BDT
    const [zakat, setZakat] = useState(0);

    const calculateZakat = () => {
        // Zakat is 2.5% of total wealth that exceeds the nisab value (minimum threshold)
        const nisab = 52.5; // in grams
        let totalInCurrency = deposit;

        // Convert silver to currency
        if (silver > 0) {
            const silverRate = 0.52; // market value of silver per gram in USD
            const silverValue = silver * silverRate * currencyRate;
            totalInCurrency += silverValue;
        }

        // Convert gold to currency
        if (gold > 0) {
            const goldRate = 49.86; // market value of gold per gram in USD
            const goldValue = gold * goldRate * currencyRate;
            totalInCurrency += goldValue;
        }

        // Calculate Zakat payable
        const zakatPayable = totalInCurrency >= nisab ? (totalInCurrency * 0.025) : 0;

        setZakat(zakatPayable);
    };

    return (
        <View>
            <Text>Calculate Zakat</Text>
            <Text>Total Silver (in grams): {silver}</Text>
            <TextInput
                placeholder="Enter silver (in grams)"
                keyboardType="numeric"
                value={silver.toString()}
                onChangeText={value => setSilver(parseFloat(value))}
            />
            <Text>Total Gold (in grams): {gold}</Text>
            <TextInput
                placeholder="Enter gold (in grams)"
                keyboardType="numeric"
                value={gold.toString()}
                onChangeText={value => setGold(parseFloat(value))}
            />
            <Text>Total Deposit (in {currency}): {deposit}</Text>
            <TextInput
                placeholder={`Enter deposit (in ${currency})`}
                keyboardType="numeric"
                value={deposit.toString()}
                onChangeText={value => setDeposit(parseFloat(value))}
            />
            <Button title="Calculate Zakat" onPress={calculateZakat} />
            <Text>Zakat Payable: {zakat} {currency}</Text>
            <Button title="Donation" onPress={() => navigation.navigate('Payment')} />
        </View>
    );
};

export default ZakatCalculator;

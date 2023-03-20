import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ZakatCalculator = () => {
    const [wealth, setWealth] = useState(0);
    const [zakat, setZakat] = useState(0);

    const calculateZakat = () => {
        
        // Zakat is 2.5% of total wealth that exceeds the nisab value (minimum threshold)
        const nisab = 345; // in grams of silver as of 2023
        const zakatableWealth = wealth - nisab;

        if (zakatableWealth <= 0) {
            setZakat(0);
            return 0;
        }
        else{
            console.log('Press')
            const zakatAmount = (zakatableWealth * 0.025) * 78.34;
            setZakat(zakatAmount);
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
                Zakat Calculator
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 8 }}>Wealth (in grams of silver):</Text>
                <TextInput
                    style={{ borderWidth: 1, padding: 8, flex: 1 }}
                    keyboardType="numeric"
                    onChangeText={(value) => setWealth(parseFloat(value))}
                    value={wealth.toString()}
                />
            </View>
            <Button title="Calculate Zakat" onPress={calculateZakat} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16 }}>
                Zakat payable: {zakat.toFixed(2)} Taka
            </Text>
        </View>
    );
};

export default ZakatCalculator;

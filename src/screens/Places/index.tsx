import React from 'react';
import { View } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Places() {
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <GooglePlacesAutocomplete
        placeholder="Enter Location"
        minLength={2}
        fetchDetails
        onPress={(_, a) => console.log(a)}
        query={{
          key: 'AIzaSyDBAgxzPFtCQFyZqZeOYbaNIR1fgWx9XyE',
        }}
        styles={{
          textInputContainer: {
            width: '100%',
          },
          textInput: {
            height: 38,
            color: 'rgb(191, 191, 191)',
            fontSize: 18,
            fontWeight: '600',
          },
        }}
      />

    </View>
  );
}

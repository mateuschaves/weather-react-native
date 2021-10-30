import React from 'react';
import { View } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { newLocationActions } from '../../store/ducks/Location/NewLocation';

export default function Places() {
  const dispatch = useDispatch();

  return (
    <View style={{
      flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff',
    }}
    >
      <GooglePlacesAutocomplete
        placeholder="Enter Location"
        minLength={2}
        fetchDetails
        onPress={(_, a) => dispatch(newLocationActions.newLocation(a))}
        query={{
          key: 'AIzaSyDBAgxzPFtCQFyZqZeOYbaNIR1fgWx9XyE',
        }}
        textInputProps={{
          autoFocus: true,
        }}
        styles={{
          textInputContainer: {
            width: '100%',
          },
          textInput: {
            height: 50,
            color: 'rgb(191, 191, 191)',
            fontSize: 18,
            fontWeight: '600',
            borderColor: 'rgb(191, 191, 191)',
          },
        }}
      />

    </View>
  );
}

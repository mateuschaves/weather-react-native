import React from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { newLocationActions } from '../../store/ducks/Location/NewLocation';

import { constants } from '~/config';

import { Container } from './styles';

export default function Places() {
  const dispatch = useDispatch();

  return (
    <Container>
      <GooglePlacesAutocomplete
        placeholder="Escolha uma localização"
        minLength={2}
        fetchDetails
        onPress={(_, a) => dispatch(newLocationActions.newLocation(a))}
        query={{
          key: constants.GOOGLE_PLACES_API_KEY,
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

    </Container>
  );
}

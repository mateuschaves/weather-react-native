import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import {
  Container, CityInfoContainer, City, Date,
} from './styles';

interface HeaderProps {
    city: string;
    date: string;
    handleAddPlaceClick: () => void,
}

export default function Header({ city, date, handleAddPlaceClick }: HeaderProps) {
  return (
    <Container>
      <CityInfoContainer>
        <City>{city}</City>
        <Date>{date}</Date>
      </CityInfoContainer>

      <Ionicons name="add" size={40} onPress={handleAddPlaceClick} />
    </Container>
  );
}

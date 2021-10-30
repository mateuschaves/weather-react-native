import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
    margin-top: 20px;
`;

export const CityInfoContainer = styled.View`
    flex-direction: column;
`;

export const City = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const Date = styled.Text`
    font-size: 17px;
    margin-top: 4px;
`;

/* eslint-disable camelcase */
export interface LocationDto {
  message: string;
}

export interface LocationResponseItem {

}

export interface Location {
  address_components: [
    formatted_address: string,
    geometry: {
      location: {
        lat: number;
        lng: number;
      }
    }
  ]
}

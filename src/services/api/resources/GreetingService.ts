import client from '../client';
import { LocationDto } from '~/@types/dto/location';

const sayHi = (greetingDto: LocationDto) => client({
  url: 'say-hi',
    method: 'POST',
    data: greetingDto,
  });

export default { sayHi };

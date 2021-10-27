import client from '../client';
import { GreetingDto } from '~/@types/dto/greeting';

const sayHi = (greetingDto: GreetingDto) => client({
    url: 'say-hi',
    method: 'POST',
    data: greetingDto,
  });

export default { sayHi };

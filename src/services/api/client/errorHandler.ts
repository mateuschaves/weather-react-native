import { Alert } from 'react-native';

const errorHandler = (error: any, handleError: boolean) => {
  if (!handleError) {
    return Promise.reject(error);
  }

  if (error.response) {
    switch (error.response.status) {
      case 400:
        // Alert.alert('info', error.response.data.message);
        break;
      case 401:
        Alert.alert(
          'Login ou senha incorretos',
          'Caso você tenha esquecido sua senha, pode recuperar indo em "Esqueceu a senha"'
        );
        break;
      default:
        Alert.alert(
          'info',
          'Ops, algum problema ocorreu, tente novamente mais tarde...',
        );
        break;
    }
  }
  return Promise.reject(error);
};

export default errorHandler;

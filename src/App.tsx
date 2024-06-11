import { useForm } from 'react-hook-form';
import { Box, Center, HStack, VStack } from './chakraImports';

type FormData = {
  email: string;
  password: string;
};

function App() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" {...register('password')} type="password" />
        </div>
        <button type="submit">ログイン</button>
        </form>
        <Box bg="red.500" w="40px" h="40px" />
        <Center>
            <Box bg="blue.500" w="40px" h="40px" />
        </Center>
    </div>
  );
}

export default App;
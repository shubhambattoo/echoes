import { Container } from '@chakra-ui/layout';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Container maxW="lg" mt={6}>
        <h1>Home Page</h1>
      </Container>
    </Layout>
  );
}

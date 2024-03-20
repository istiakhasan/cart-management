import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Perform the redirect on the client side
    router.push('/shop');
  }, []);

  // This component doesn't need to render anything since it's performing a redirect
  return null;
};

export default Home;

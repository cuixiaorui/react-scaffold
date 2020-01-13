import HomeNav from './components/HomeNav/HomeNav';
import HomeBody from './components/HomeBody/HomeBody';

export default function() {
  return (
    <div data-testid="home">
      <HomeNav></HomeNav>
      <HomeBody></HomeBody>
    </div>
  );
}

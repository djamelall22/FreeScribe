import { Header } from './components/Header';
import { HomePage } from './components/Homepage';

function App() {
  return (
    <div className='flex flex-col  max-w-[1000px] mx-auto w-full'>
      <section className='min-h-screen flex flex-col'>
        <Header />

        <HomePage />
        <footer></footer>
      </section>
    </div>
  );
}

export default App;

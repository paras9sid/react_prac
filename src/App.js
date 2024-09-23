import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';


export default function App() {
  return (
    // <>App</> //OR below div one - have to wrapped in empty tags-ragments or div
    // <div>App</div>
    // naming convention - camelCase
    <>
      <Header />
      <div>
        <h1>Sids</h1>
      </div>
      <Footer />
    </>
  )
}

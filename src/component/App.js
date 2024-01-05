// import List from './list';
// import Home from './home';
import Navbar from './navbar';
import './app.css';
import MyRouter from '../router/myRouter';

export default function App() {
    return (
        <div>
            <Navbar />

            <MyRouter />
        </div>
    );
}
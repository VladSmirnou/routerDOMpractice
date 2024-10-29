import { Header } from '@/common/components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;

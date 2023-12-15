import { Routes, Route } from 'react-router-dom';
import { NotFound, Maintenance } from '@pages/errors';
import { Home, Coding, Explanation, Admin, ProtectedPage } from '@/pages';
import ProtectedRoute from './ProtectedRoutes';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Static / Main */}
            <Route path="/" element={<Home />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/explanation" element={<Explanation />} />

            <Route 
                path="/protected-page" 
                element={<ProtectedRoute component={ProtectedPage} />} 
            />

            {/* Errors */}
            <Route path="/*" element={<NotFound />} />
            <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
    );
}

export default AppRoutes;

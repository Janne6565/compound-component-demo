import { Route, Routes as RouterRoutes } from 'react-router';
import LoginPage from 'src/pages/LoginPage/LoginPage.tsx';
import RegisterPage from 'src/pages/RegisterPage/RegisterPage.tsx';

const Routes = () => {
    return (
        <RouterRoutes>
            <Route path="/" element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
        </RouterRoutes>
    );
};

export default Routes;

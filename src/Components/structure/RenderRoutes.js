import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthData } from "../../auth/AuthWrapper";
import { routesConfig } from './routesConfig';  // Adjust the import path accordingly

const RenderRoutes = () => {
    const { user } = AuthData();

    // Function to render routes dynamically
    const renderRoutes = (routes) => {
        return routes.map(({ path, element, children }, index) => (
            <Route key={index} path={path} element={element}>
                {children && renderRoutes(children)}
            </Route>
        ));
    };

    return (
        <Routes>
            {/* Public routes */}
            {renderRoutes(routesConfig.public)}

            {/* Conditional routes based on user type */}
            {user.isAuthenticated && user.type === 'client' && (
                <>
                    {renderRoutes(routesConfig.client)}
                    <Route path="*" element={<Navigate to="/C" replace />} />  {/* Redirect to client root */}
                </>
            )}

            {user.isAuthenticated && user.type === 'admin' && (
                <>
                    {renderRoutes(routesConfig.admin)}
                    <Route path="*" element={<Navigate to="/A" replace />} />  {/* Redirect to admin root */}
                </>
            )}

            {/* Fallback route */}
            {!user.isAuthenticated && <Route path="*" element={<Navigate to="/Login" replace />} />}  {/* Redirect unauthenticated users to login */}
        </Routes>
    );
};

export default RenderRoutes;
    
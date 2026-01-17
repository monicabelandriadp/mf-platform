import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
const Test = React.lazy(() => import('test/Module'));

// Importación Lazy del componente remoto
const LoginForm = React.lazy(() => import('security/LoginForm'));
const SecurityDashboard = React.lazy(
  () => import('security/SecurityDashboard')
);

export function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación simple */}
      <nav className="bg-white border-b border-gray-200 p-4">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold text-xl">MF Platform</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-blue-600 hover:text-blue-800"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container mx-auto p-4">
        <React.Suspense
          fallback={
            <div className="text-center mt-10">Cargando microfrontend...</div>
          }
        >
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-3xl font-bold">Bienvenido a la Shell</h1>
              }
            />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/dashboard" element={<SecurityDashboard />} />
          </Routes>
        </React.Suspense>
      </main>
    </div>
  );
}

export default App;

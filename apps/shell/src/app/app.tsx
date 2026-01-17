import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// Importación Lazy del componente remoto
const LoginForm = React.lazy(() => import('login/LoginForm'));

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
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Login
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
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </React.Suspense>
      </main>
    </div>
  );
}

export default App;

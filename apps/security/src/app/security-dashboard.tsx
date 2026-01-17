export function SecurityDashboard() {
  return (
    <div className="flex items-center justify-center min-h-[300px] bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Panel de Seguridad
        </h2>
        <p className="text-center text-gray-700">
          Bienvenido al dashboard de seguridad. Aquí puedes gestionar
          configuraciones de seguridad.
        </p>
        <button className="w-full px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
          Configurar Seguridad
        </button>
      </div>
    </div>
  );
}

export default SecurityDashboard;

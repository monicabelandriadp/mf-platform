import { Button, Alert, AlertTitle } from '@platform/ui';

export function App() {
  return (
    <div className="p-6 space-y-4">
      <Alert>
        <AlertTitle>Hola desde UI</AlertTitle>
      </Alert>

      <Button>Click me</Button>
    </div>
  );
}

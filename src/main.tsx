import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/App';
import { AuthContextProvider } from 'src/contexts';

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </StrictMode>
  );
}

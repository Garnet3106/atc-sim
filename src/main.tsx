import { createRoot } from 'react-dom/client';

import App from './components/App.tsx';

createRoot(document.getElementById('pixi-container')!).render(<App />);

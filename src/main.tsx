import React from 'react';
import ReactDOM from 'react-dom/client';
import 'app/styles/main.scss';
import { Input } from 'components';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Input />
    </React.StrictMode>,
);

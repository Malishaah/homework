import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Ändrat från "react-router" till "react-router-dom"
import './index.css';
import App from './HomePage';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route index element={<ForYouPage />} />
          <Route path="artists/:slug/:id" element={<ArtistPage />} />
          <Route path="album" element={<AlbumPage />} />
          <Route path="radio" element={<RadioPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

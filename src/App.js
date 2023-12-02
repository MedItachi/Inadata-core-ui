// ------Import components------

import { Barchart, PieChart } from "./components/charts";
import UserForm from "./components/sign/";
import FileUploader from "./components/fileUploder";
// ------------------------------
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<UserForm />} />
            <Route path="/about" element={<h1>about</h1>} />
            <Route path="/charts" element={<PieChart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

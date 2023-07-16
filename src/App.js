import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const RecipesPage = lazy(() => import("./pages/RecipesPage/RecipesPage"));
const OneRecipePage = lazy(() => import("./pages/OneRecipePage/OneRecipePage"));


function App() {

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<RecipesPage />} />
        <Route path="/:id" element={<OneRecipePage />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Route>
    </Routes>
  );
}

export default App;

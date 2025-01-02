import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./layouts/Layout"
const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={
                        <Suspense fallback='Cargando...'>
                            <IndexPage></IndexPage>
                        </Suspense>
                    } index />
                    <Route path="/favoritos" element={
                        <Suspense fallback='Cargando...'>
                            <FavoritesPage></FavoritesPage>
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

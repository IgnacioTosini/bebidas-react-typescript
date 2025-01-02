import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { useAppStore } from "../stores/useAppStore"
import { useEffect } from "react"
import Modal from "../components/Modal"
import Notification from "../components/Notification"

export const Layout = () => {
    const loadFromStorage = useAppStore(state => state.loadFromStorage)

    useEffect(() => {
        loadFromStorage()
    }, []);
    return (
        <>
            <Header />
            <main className="container mx-auto py-16">
                <Outlet />
            </main>
            <Modal></Modal>
            <Notification></Notification>
        </>
    )
}

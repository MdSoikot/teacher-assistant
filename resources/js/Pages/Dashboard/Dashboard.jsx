import { $user } from "../../GlobalStates"
import Layout from "../Layout/Layout"
import { useRecoilState, useRecoilValue } from 'recoil'
import { usePage } from "@inertiajs/inertia-react";

const Dashboard = () => {
    const { user } = usePage().props;
    const [userInfo, setUserInfo] = useRecoilState($user)
    setUserInfo(user)
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
Dashboard.layout = (page) => <Layout>{page}</Layout>
export default Dashboard

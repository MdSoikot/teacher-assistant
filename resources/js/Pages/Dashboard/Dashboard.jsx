import { $user } from "../../GlobalStates"
import Layout from "../Layout/Layout"
import { useRecoilValue } from 'recoil'

const Dashboard = () => {
    //const user = useRecoilValue($user)
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
Dashboard.layout = (page) => <Layout>{page}</Layout>
export default Dashboard

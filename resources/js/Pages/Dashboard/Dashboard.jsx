import { $user } from "../../GlobalStates"
import Layout from "../Layout/Layout"
import { useRecoilState, useRecoilValue } from 'recoil'
import { usePage } from "@inertiajs/inertia-react";

const Dashboard = () => {
    const { user, notices } = usePage().props;
    const [userInfo, setUserInfo] = useRecoilState($user)
    console.log('notices', notices);
    setUserInfo(user)
    return (
        <div className="pl-6 pt-6">
            {
                notices?.map((itm) => {
                    return (
                        <div className="notice-card">
                            <div className="font-inter-600 text-md flex justify-center">
                                Class posponded tommorow
                            </div>
                            <div className="mt-4 font-inter-normal">
                                <span>
                                    dsfsfs fsfdsfsf sfddfsdfsd sdfdsf sdfsdf
                                    sdfdsf sdfdsfsd fsfsdf sdfdsf sdfsdf dfsf
                                    sdfdsf sdf dsff sdfsdf sdf sdfsf sdfsff sds
                                    sdffs sdfsfd fsfsdf fsdfsfsf sdfsdf.....
                                </span>

                                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
                                <div className="flex justify-center">
                                    <button className="mt-2 view-more">
                                        view more
                                    </button>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}
Dashboard.layout = (page) => <Layout>{page}</Layout>
export default Dashboard

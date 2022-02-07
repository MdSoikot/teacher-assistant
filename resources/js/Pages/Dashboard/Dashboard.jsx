import { $user } from "../../GlobalStates"
import Layout from "../Layout/Layout"
import { useRecoilState, useRecoilValue } from 'recoil'
import { usePage } from "@inertiajs/inertia-react";
import { useState } from "react";
import ModalCommon from "../../Shared/ModalCommon";

const Dashboard = () => {
    const { user, notices } = usePage().props;
    const [userInfo, setUserInfo] = useRecoilState($user)
    const [actionMdl, setActionMdl] = useState({})
    console.log('notices', notices);
    setUserInfo(user)

    const showModal = (name, item) => {
        setActionMdl({ show: name, value: item })
    }
    const closeAction = () => {
        setActionMdl({ show: false })
    }
    const trancateStr = (string) => {
        if (string.length <= 200) {
            return string
        }
        return string.slice(0, 200).concat('...');
    }
    return (
        <div className="dash-main flex flex-wrap ml-12 mt-12">
            {
                notices?.map((itm) => {
                    return (
                        <div className="notice-card mr-12 mb-12">
                            <div className="font-inter-600 text-md flex justify-center mt-4">
                                Class posponded tommorow
                            </div>
                            <div className="font-inter-normal mt-4 ml-4">
                                <span className="font-inter-normal" dangerouslySetInnerHTML={{ __html: trancateStr(itm?.notice_body) }} />

                                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
                                <div className="flex justify-center mt-4">
                                    <button className="view-more" onClick={() => showModal('notice', itm)}>
                                        view more
                                    </button>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
            <ModalCommon
                show={actionMdl.show === 'notice'}
                size="lg"
                closeAction={() => closeAction()}
            // btnTitle="Save"
            // btnAction={() => handleSubmitBtn('view_user')}
            >
                <div className="mt-2 mb-2 gap-2">
                    <div className="flex justify-center w-full">
                        <span className="font-inter-700">{actionMdl?.value?.notice_title}</span>
                    </div>
                    <div className="notice-body w-full flex justify-center mt-4">
                        <span className="font-inter-normal" dangerouslySetInnerHTML={{ __html: actionMdl?.value?.notice_body }} />
                    </div>
                </div>
            </ModalCommon>
        </div>
    )
}
Dashboard.layout = (page) => <Layout>{page}</Layout>
export default Dashboard

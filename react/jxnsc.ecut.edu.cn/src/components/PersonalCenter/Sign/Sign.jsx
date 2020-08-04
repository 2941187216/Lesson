import React from 'react'
import './index.css'
import axios from 'axios'
import { axiosInstance } from "../../../api/config"
export default function Sign(props) {
    const handleSign = () => {
        axiosInstance({
            method: 'POST',
            url: `/user/applyTeam?id=${props.id}`,
        })
            .then(function (response) {
                alert(response.data.msg)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return (
        <div className="sign">
            <div className="sign-content">
                <div className="sign-content_info">
                    <h3>是否报名</h3>
                    <p>是否确认报名，点击确认后报名信息将无法更改！</p>
                    <div className="sign-button">
                        <div onClick={() => { props.changeSignNo(); handleSign() }} className="sign-pass">确认</div>
                        <div onClick={() => { props.changeSignNo() }} className="sign-cancel">取消</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

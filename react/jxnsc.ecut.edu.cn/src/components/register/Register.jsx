import React, { useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import './Register.css'
import user_icon from './img/user_icon_copy.png'
import lock_icon from './img/lock_icon_copy.png'
import key from './img/key.png';
import bg from './img/bg.jpg';
import { Link } from 'react-router-dom'
export default function Register() {
    const [registername, setregistername] = useState('');
    const [resgisterpwd, setresgisterpwd] = useState('');
    const [repwd, setrepwd] = useState('');
    const [valicode, setvalicode] = useState('');
    const changeRegisterName = e => {
        console.log(e.target.value)
        setregistername(e.target.value)
    }
    const changeRegisterPwd = e => {
        console.log(e.target.value)
        setresgisterpwd(e.target.value)
    }
    const changeRePwd = e => {
        console.log(e.target.value)
        setrepwd(e.target.value);
    }
    const changeValicode = e => {
        console.log(e.target.value)
        setvalicode(e.target.value)
    }
    const [img , setImg] = useState('1')

    const handleResgister = () => {
        // const data = {
        //     'email': registername,
        //     'password': resgisterpwd,
        //     'confirmpwd': repwd,
        //     'verificationcode': valicode
        // }
        const options = {
            url: 'http://192.168.43.66/user/register',
            method: 'POST',
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            // data: qs.stringify(data)
            data: {
                'email': registername,
                'password': resgisterpwd,
                'confirmpwd': repwd,
                'verificationcode': valicode
            },
            // transformRequest: function (obj) {

            //     var str = [];
            //     for (var p in obj) {
            //         str.push(encodeURIComponent(p) + "="
            //             + encodeURIComponent(obj[p]));
            //     }
            //     return str;
            // }
        }
        axios({
            url: 'http://192.168.43.66/user/register',
            method: 'POST',
            // headers: { 'content-type': 'application/x-www-form-urlencoded' },
            // data: qs.stringify(data)
            data: {
                'email': registername,
                'password': resgisterpwd,
                'confirmpwd': repwd,
                'verificationcode': valicode
            }
        })
            .then(function (response) {
                console.log(response)
                if(response.data.code === 602) {
                    alert(response.data.msg);
                }else{
                    alert(response.data.msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="bg">
                <img src={bg} />
            </div>
            <div className="register-title">
                第三届江西省高校网络安全技能大赛
            </div>
            <div className="register">
                <div className="register_title">
                    <span>用户注册</span>
                </div>
                <div className="register-fields">
                    <div className="register-fields_user">
                        <div className="icon">
                            <img src={user_icon} />
                        </div>
                        <input type="text" name="register_name" id="register_name" placeholder="邮箱注册" autocomplete="off" autofocus
                            value={registername}
                            onChange={e => changeRegisterName(e)}
                        />
                    </div>

                    <div className="register-fields_password">
                        <div className="icon">
                            <img src={lock_icon} />
                        </div>
                        <input type="password" name="password" id="password" placeholder="密码" autocomplete="off"
                            value={resgisterpwd}
                            onChange={e => changeRegisterPwd(e)}
                        />
                    </div>

                    <div className="register-fields_password">
                        <div className="icon">
                            <img src={lock_icon} />
                        </div>
                        <input type="password" name="repassword" id="repassword" placeholder="确认密码" autocomplete="off"
                            value={repwd}
                            onChange={e => changeRePwd(e)}
                        />
                    </div>

                    <div className="register-fields_password">
                        <div className="icon">
                            <img src={key} />
                        </div>
                        <input type="text" name="valicode" id="valicode" placeholder="验证码" autocomplete="off" maxlength="4"
                            value={valicode}
                            onChange={e => changeValicode(e)}
                        />
                        <div onClick={()=>{setImg(new Date())}} className="validation">
                            {/* <a onClick={(e)=>{e.preventDefault()}} href=''> */}
                                <img src={`http://192.168.43.66/user/createValicode?time=${img}`} alt="图片加载失败" title="点击刷新" />
                            {/* </a > */}
                        </div>
                    </div>
                    <div className="register-fields_submit">
                        <input type="submit" value="注册" onClick={handleResgister} />
                    </div>
                </div>
                <div className="register-disclaimer">
                    {/* <a href="#">忘记密码？</a>||
                    <a href="../index/index.html">返回</a> */}
                    <Link to="/findpwd" className="findpwd">
                        <span>忘记密码？</span>
                    </Link>
                    <Link to="/login" className="gotologin">
                        <span>登录 |</span>
                    </Link>

                    <Link to="/" className="goback">
                        <span>&nbsp;返回</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}


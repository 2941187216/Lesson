import React from 'react'
import './index.css'
import Personalbg from '../../../assets/img3/Personalbg.jpg'
import Personalbg1 from '../../../assets/img3/1.jpg'
import portrait from '../../../assets/img3/portrait.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function PersonalTop(props) {
    const [team, setTeam] = useState(false)
    const [infos, setInfos] = useState([{
        icon: '&#xe622;',
        name: '个人中心'
    }, {
        icon: '&#xe60a;',
        name: '设置中心'
    }])
    const [highLight, setHighLight] = useState(0)
    const { displayPreson, displaySetting } = props
    const changeHighLight = (i)=>{
        setHighLight(i)
    }
    return (
        <div className='person-top'>
            {/* <div className="person-top_bgImg">
                <img src={Personalbg} alt="" />
            </div> */}
            <div className="person-top_info">
                <div className="person-top_personImg">
                    <img src={portrait} alt="" />
                </div>
                <h2 className='person-top_welcome'>您好!欢迎来到个人中心</h2>
                {team ? null : <p>所属团队: 您还未加入任何团队  / <Link to ={`/createTeam/${props.id}`} >创建队伍</Link> </p>}
                <div className="person-top_seletor">
                    {infos.map((info, i) => {
                        return (
                            <span className={i == highLight ? 'highLight' : null} key={i} onClick={()=>{i == 0 ? displayPreson() : displaySetting() ; changeHighLight(i)} }>{i == 1 ? <i className='iconfont'>&#xe60a;</i> : <i className='iconfont'>&#xe622;</i>}{info.name}</span>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

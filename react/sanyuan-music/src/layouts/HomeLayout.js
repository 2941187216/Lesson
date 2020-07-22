import React from 'react';
import { renderRoutes } from "react-router-config";
import { Top, TabItem, Tab } from './HomeLayout.style';
import { NavLink } from 'react-router-dom';
function Home(props) {
  const { route } = props;
  return (
    <>
      <Top>
        <span className="iconfont menu">
          &#xe65c;
        </span>
        <span className="title">云音悦</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recomend" activeClassName="selected">
          <TabItem><span>推荐</span></TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem><span>歌手</span></TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem><span>排行榜</span></TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </>
  )
}

export default React.memo(Home);

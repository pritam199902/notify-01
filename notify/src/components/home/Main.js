import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home';
import Notice from '../notice/Notice'
import Section from '../section/SectionList'

import NoticeInfo from "../notice/NoticeInfo";


function Main() {
    const id=123123
    const {url, path} = useRouteMatch()
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/home" children={Home} />
                <Route exact path="/home/notice" children={Notice} />
                <Route exact path={`/home/notice/${id}`} children={NoticeInfo} />
                
                <Route exact path="/home/section" children={Section} />
            </Switch>
        </div>
    )
}

export default Main

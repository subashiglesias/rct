import React from 'react';
import './LandingPage.css'
import Tile from "../Tile";
import assigment from '../../images/assignment.svg'
import gavel from '../../images/gavel.svg'
import transportation from '../../images/transportation.svg'
import people from '../../images/people.svg'
import store from '../../images/store.svg'
import { Descriptions } from '../../constants'
import config from '../../../server/config';
import {RouterPaths} from "../../constants";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h2> Welcome to Construction Tool </h2>
            <h3> Please select one of the projects above to proceed </h3>
            <div className="row-1">
                <Tile image={assigment} text={Descriptions.PROJECTS} onClickHandler={() => document.location.href=`${config.appRoute}${RouterPaths.PROJECTS}`}/>
                <Tile image={gavel} text={Descriptions.MATERIALS}/>
                <Tile image={transportation} text={Descriptions.TRANSPORTATION}/>
            </div>
            <div className="row-2">
                <Tile image={people} text={Descriptions.CLIENT}/>
                <Tile image={store} text={Descriptions.VENDOR}/>
            </div>
        </div>
    )
}

export default LandingPage;
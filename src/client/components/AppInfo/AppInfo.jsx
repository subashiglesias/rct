import React from 'react';
import './AppInfo.scss'
import config from './../../../server/config'
import {RouterPaths} from "../../constants";

const Appinfo = () => {
    return (
        <div className="App-header">
            <h3 onClick={() => window.location.href = `${config.appRoute}${RouterPaths.ROOT}`}>Construction Tool</h3>
        </div>
    )
}

export default Appinfo;
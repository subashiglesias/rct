import React, {useEffect, useState} from 'react';
import './ProjectsPage.css';
import server from '../../utils/serverUrl'
import Axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {TabContext, TabPanel} from "@material-ui/lab";
import TabList from "@material-ui/lab/TabList";
import Tab from "@material-ui/core/Tab";
import {renderIf, renderIfElse} from "../../utils/helpers";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ProjectsForm from "../Forms";
var moment = require('moment'); // require


const ProjectsPage = () => {
    const [value, setValue] = useState(0);
    const [projects, setProjects] = useState([]);
    const [dialog, setDialog] = useState('');

    useEffect(() => {
        Axios({
            method: "GET",
            url: server.serverPath + server.appRoute + '/api/allProjects',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            setProjects(res.data)
        });
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = close => event => {
        event.preventDefault();
        const form = event.target;
        const body = createNewProjectBody(new FormData(form));
        console.log(body);
        Axios({
            method: "POST",
            url: server.serverPath + server.appRoute + '/api/newProject',
            headers: {
                "Content-Type": "application/json"
            },
            data: body,
        }).then(res => {
            console.log("Submitted");
            console.log(res.data);
            if(res.data.values.length){
                setProjects(res.data.values);
                setDialog('');
                close();
            }
            else {
                setDialog(res.data.error);
            }
        }).catch(err => {
            console.log(err);
        });

    };

    const createNewProjectBody = (formValues) => {
        return {
            name: formValues.get('name'),
            area: formValues.get('area'),
            category: formValues.get('category'),
            description: formValues.get('description'),
            createdBy: "Bob cane",
            createdDate: moment().format('DD/MM/YYYY'),
        }
    }

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            display: 'flex',
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
        }
    }));
    const classes = useStyles();
    return (
        <div className="project-page">
            <div className={classes.root}>
                <TabContext value={value}>
                    <TabList orientation="vertical"
                             variant="scrollable"
                             value={value}
                             onChange={handleChange}
                             aria-label="List of projects"
                             className={classes.tabs}>
                        {projects.map((project) => (<Tab label={project.name} value={project.name}/>))}
                    </TabList>
                    <div className="project-page__panel">
                        {renderIf(() => value === 0, () => (<div className="project-page__content">
                            <h2> Project overview displayed here </h2>
                            <h3> Please select the name of the projects at the side to edit to proceed or Click below to
                                add new</h3>
                            <Popup trigger={<button type="button"
                                                    className="project-page-new-project-button">Add New</button>} modal>
                                {close => (
                                    <ProjectsForm handleSubmit={handleSubmit} close={close} dialog={dialog}/>
                                )}
                            </Popup>
                        </div>))}
                    </div>
                    {projects.map((project) => (<TabPanel value={project.name}> {project.name} </TabPanel>))}
                </TabContext>
            </div>
        </div>)
}

export default ProjectsPage;
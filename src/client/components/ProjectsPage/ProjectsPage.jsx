import React, { useEffect, useState } from 'react';
import './ProjectsPage.css';
import server from '../../utils/serverUrl'
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { TabContext, TabPanel } from "@material-ui/lab";
import TabList from "@material-ui/lab/TabList";
import Tab from "@material-ui/core/Tab";
import { renderIf } from "../../utils/helpers";

const ProjectsPage = () => {
    const [value, setValue] = useState(0);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        Axios({
          method: "GET",
          url: server.serverPath+server.appRoute+'/api/allProjects',
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
                    {renderIf(() => value === 0, () => (<div className="project-page-content">
                        <h2> Project overview displayed here </h2>
                        <h3> Please select the name of the projects at the side to edit to proceed </h3>
                    </div>))}
                    {projects.map((project) => (<TabPanel value={project.name}> {project.name} </TabPanel>))}
                </TabContext>
            </div>
        </div>)
}

export default ProjectsPage;
import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/lab/TabList';
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider
} from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import {TabPanel, TabContext} from '@material-ui/lab';
import { renderIf } from '../../utils/helpers'
import './HomePage.css'
import ProjectsPage from "../ProjectsPage";

const HomePage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createMuiTheme({
        overrides: {
            MuiAppBar: {
                colorPrimary: {
                    backgroundColor: "#333232"
                }
            }
        }
    });

    const useStyles = makeStyles(theme => ({
        customizeToolbar: {
            maxHeight: "3rem"
        }
    }));
    const classes = useStyles();

    return (
        <div className="home-page">
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <AppBar position="static" className={classes.customizeToolbar}>
                        <TabList onChange={handleChange} aria-label="Group of screens">
                            <Tab label="Project" value="1"/>
                            <Tab label="Vendor" value="2"/>
                            <Tab label="Client" value="3"/>
                        </TabList>
                    </AppBar>
                    { renderIf(() => value === 0, () => (<div className="home-page-content">
                        <h2> Welcome to Construction Tool </h2>
                        <h3> Please select one of the projects above to proceed </h3>
                    </div>) )}
                    <TabPanel value="1"> <ProjectsPage/> </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </ThemeProvider>
        </div>)
}

export default HomePage;
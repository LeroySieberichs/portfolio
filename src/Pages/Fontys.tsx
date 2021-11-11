import React from 'react'
import Sidebar from "../Components/Sidebar/Sidebar"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Card from "../Components/Cards/Card"



export default function Fontys() {


    return (
        <div>


                <Sidebar>
                    <Tabs>
                        <TabList>
                            <Tab>Assignments</Tab>
                            <Tab>September</Tab>
                            <Tab>Oktober</Tab>
                            <Tab>November</Tab>
                            <Tab>Learning Outcome</Tab>
                        </TabList>

                        <TabPanels>
                        <TabPanel>
                            <Card month ="Assignment" />
                            </TabPanel>
                            <TabPanel>
                            <Card month ="September" />
                            </TabPanel>
                            <TabPanel>
                            <Card month ="Oktober" />
                            </TabPanel>
                            <TabPanel>
                            <Card month ="November" />
                            </TabPanel>
                            <TabPanel>
                            <Card month ="LearningOutcome" />
                            </TabPanel>
                            <TabPanel>
                            <Card month ="ProfessionalGrowth" />
                            </TabPanel>
                            <TabPanel>
                            <Card month ="DuoProject" />
                            </TabPanel>
                            <TabPanel>
                            <Card month ="ClientProject" />
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Sidebar>

        </div>
    )
}

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
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Sidebar>

        </div>
    )
}

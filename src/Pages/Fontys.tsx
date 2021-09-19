import React from 'react'
import { firestore } from "../lib/firebase";
import Sidebar from "../Components/Sidebar/Sidebar"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import AuthCheck from "@components/Authentication/AuthCheck"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import Card from "../Components/Cards/Card"



export default function Fontys() {


    return (
        <div>
            <AuthCheck>

                <Sidebar>
                    <Tabs>
                        <TabList>
                            <Tab>September</Tab>
                        </TabList>

                        <TabPanels>
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

            </AuthCheck>
        </div>
    )
}

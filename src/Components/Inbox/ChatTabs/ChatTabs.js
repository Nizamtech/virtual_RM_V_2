import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ChatTabs = ({ data }) => {
  return (
    <Tabs className=" w-full">
      <TabList>
        <Tab>Live</Tab>
        <Tab>Closed</Tab>
        <Tab>Pending </Tab>
      </TabList>

      <TabPanel>
        <div className=" mt-3">
          {data &&
            data?.map((item) => (
              <div className="p-2 flex  items-center my-4 hover:bg-[#d8e6f1]">
                <img
                  className=" rounded-full h-12 w-12 mx-2"
                  src={item?.avatar}
                  alt=""
                />
                <h1 className="text-[18px] ">{item?.name}</h1>
              </div>
            ))}
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ChatTabs;

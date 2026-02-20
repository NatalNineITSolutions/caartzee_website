import { Fragment } from 'react';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const BlogTabList = () => {
  return (
    <Fragment>
      <TabList variant="desktop">
        <Tab index={0} variant="desktop">
          All
        </Tab>
        <Tab index={1} variant="desktop">
          Product Updates
        </Tab>
        <Tab index={2} variant="desktop">
          Ecommerce
        </Tab>
        <Tab index={3} variant="desktop">
          Growth
        </Tab>
        <Tab index={4} variant="desktop">
          Automation
        </Tab>
        <Tab index={5} variant="desktop">
          Tutorials
        </Tab>
      </TabList>
      <TabList variant="mobile">
        <Tab index={0} variant="mobile">
          All
        </Tab>
        <Tab index={1} variant="mobile">
          Product Updates
        </Tab>
        <Tab index={2} variant="mobile">
          Ecommerce
        </Tab>
        <Tab index={3} variant="mobile" className="text-nowrap">
          Growth
        </Tab>
        <Tab index={4} variant="mobile">
          Automation
        </Tab>
        <Tab index={5} variant="mobile">
          Tutorials
        </Tab>
      </TabList>
    </Fragment>
  );
};

export default BlogTabList;

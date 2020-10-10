import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Divider, Layout, Text, TopNavigation, Tab, TabBar, ViewPager } from '@ui-kitten/components';

export const DetailsScreen = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Productos' alignment='center'/>
      <TabBar
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <Tab title='USERS'/>
        <Tab title='ORDERS'/>
        <Tab title='TRANSACTIONS'/>
      </TabBar>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ViewPager
          selectedIndex={selectedIndex}
          onSelect={index => {console.log(index); setSelectedIndex(index)}}>
          <Layout
            style={styles.tab}
            level='2'>
            <Text category='h5'>USERS</Text>
          </Layout>
          <Layout
            style={styles.tab}
            level='2'>
            <Text category='h5'>ORDERS</Text>
          </Layout>
          <Layout
            style={styles.tab}
            level='2'>
            <Text category='h5'>TRANSACTIONS</Text>
          </Layout>
        </ViewPager>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
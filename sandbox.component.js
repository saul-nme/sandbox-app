import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation,  } from '@ui-kitten/components';

export const SandBoxScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='SandBox' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Button>Button</Button>
      </Layout>
    </SafeAreaView>
  );
};
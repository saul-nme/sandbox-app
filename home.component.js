import React from 'react';
import { SafeAreaView, StatusBar as StatusBarAndroid, Platform, View, StyleSheet, Modal } from 'react-native';
import { Datepicker,Button, Divider, Layout, TopNavigation, Text, Icon, Card, Spinner, ButtonGroup, CheckBox, RadioGroup, Radio, Input, Select, SelectItem, IndexPath, Tooltip } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBarAndroid.currentHeight;

export const HomeScreen = ({ navigation }) => {

  const [counter, setCounter] = React.useState(0);
  const [text, setText] = React.useState('Press any button');

  const [activeChecked, setActiveChecked] = React.useState(false);
  const [indeterminateChecked, setIndeterminateChecked] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedIndexOpt, setSelectedIndexOpt] = React.useState(new IndexPath(0));
  const [date, setDate] = React.useState(new Date());
  const [visible, setVisible] = React.useState(false);
  const [visibleTooltip, setVisibleTooltip] = React.useState(false);
  const [value, setValue] = React.useState('');

  const renderToggleButton = () => (
    <Button onPress={() => setVisibleTooltip(true)}>
      TOGGLE TOOLTIP
    </Button>
  );

  const onIndeterminateChange = (isChecked, isIndeterminate) => {
    setIndeterminateChecked(isChecked);
    setIndeterminate(isIndeterminate);
  };

  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );

  const InfoIcon = (props) => (
    <Icon {...props} name='info'/>
  );
  
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size='small'/>
    </View>
  );
  const Footer = (props) => (
    <View {...props} style={[props.style, styles.footerContainer]}>
      <Button
        style={styles.footerControl}
        size='small'
        status='basic'>
        CANCEL
      </Button>
      <Button
        style={styles.footerControl}
        size='small'>
        ACCEPT
      </Button>
    </View>
  );

  const Header = (props) => (
    <View {...props}>
      <Text category='h6'>Maldives</Text>
      <Text category='s1'>By Wikipedia</Text>
    </View>
  );
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center' style={{marginTop: STATUSBAR_HEIGHT}}/>
      <ScrollView>
        <Divider/>
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <View style={styles.row}>
            <Text style={styles.text} category='h1'>H1</Text>
            <Text style={styles.text} category='h2'>H2</Text>
            <Text style={styles.text} category='h3'>H3</Text>
            <Text style={styles.text} category='h4'>H4</Text>
            <Text style={styles.text} category='h5'>H5</Text>
            <Text style={styles.text} category='h6'>H6</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text} category='s1'>S1</Text>
            <Text style={styles.text} category='s2'>S2</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text} category='p1'>P1</Text>
            <Text style={styles.text} category='p2'>P2</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text} category='c1'>C1</Text>
            <Text style={styles.text} category='c2'>C2</Text>
            <Text style={styles.text} category='label'>LABEL</Text>
          </View>
          <View style={{width: 100}}>
            <Divider style={{height: 3}}/>
          </View>
          <Text style={styles.text} status='primary'>Primary</Text>
          <Text style={styles.text} status='success'>Success</Text>
          <Text style={styles.text} status='info'>Info</Text>
          <Text style={styles.text} status='warning'>Warning</Text>
          <Text style={styles.text} status='danger'>Danger</Text>
          <Text style={styles.text} status='basic'>Basic</Text>
          <View style={styles.controlContainer}>
            <Text style={styles.text} status='control'>Control</Text>
          </View>
          <Icon
            style={styles.icon}
            fill='#8F9BB3'
            name='star'
          />
          <Layout style={styles.topContainer} level='1'>
            <Card style={styles.card} header={Header} footer={Footer}>
              <Text>
                The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                located in the Arabian Sea of the Indian Ocean.
                It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
              </Text>
            </Card>
          </Layout>
          <Layout style={styles.container} level='1'>
            <Card style={styles.card} status='primary'>
              <Text>Primary</Text>
            </Card>

            <Card style={styles.card} status='success'>
              <Text>Success</Text>
            </Card>

            <Card style={styles.card} status='info'>
              <Text>Info</Text>
            </Card>

            <Card style={styles.card} status='warning'>
              <Text>Warning</Text>
            </Card>

            <Card style={styles.card} status='danger'>
              <Text>Danger</Text>
            </Card>

            <Card style={styles.card} status='basic'>
              <Text>Basic</Text>
            </Card>
          </Layout>
        </Layout>
        <Layout style={styles.containerCounter} level='1'>
          <Button onPress={() => setCounter(counter + 1)}>
            BUTTON
          </Button>
          <Text style={styles.texCounter}>
            Pressed {counter} times
          </Text>
        </Layout>
        <Layout style={styles.container} level='1'>
          <Button style={styles.button} appearance='filled'>
            FILLED
          </Button>

          <Button style={styles.button} appearance='outline'>
            OUTLINE
          </Button>

          <Button style={styles.button} appearance='ghost'>
            GHOST
          </Button>

          <Button style={styles.button} disabled>
            DISABLED
          </Button>

        </Layout>
        <Layout style={styles.container} level='1'>
          <Button style={styles.button} status='primary' accessoryLeft={StarIcon}>
            PRIMARY
          </Button>

          <Button style={styles.button} status='success' accessoryRight={StarIcon}>
            SUCCESS
          </Button>

          <Button style={styles.button} status='danger' accessoryLeft={StarIcon}/>

          <Button style={styles.button} appearance='ghost' status='danger' accessoryLeft={StarIcon}/>

          <Button style={styles.button} appearance='outline' accessoryLeft={LoadingIndicator}>
            LOADING
          </Button>
        </Layout>
        <Layout style={styles.container} level='1'>
          <ButtonGroup>
            <Button onPress={() => setText('Left button pressed')}>L</Button>
            <Button onPress={() => setText('Middle button pressed')}>M</Button>
            <Button onPress={() => setText('Right button pressed')}>R</Button>
          </ButtonGroup>

          <Text style={styles.text}>{text}</Text>
          <ButtonGroup appearance='outline'>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>
        </Layout>
        <Layout style={styles.containerDate} level='1'>
          <Text category='h6'>
            Selected date: {date.toLocaleDateString()}
          </Text>

          <Datepicker
            date={date}
            onSelect={nextDate => setDate(nextDate)}
          />

        </Layout>
        <Layout style={styles.container} level='1'>

          <CheckBox
            style={styles.checkbox}
            checked={activeChecked}
            onChange={nextChecked => setActiveChecked(nextChecked)}>
            Active
          </CheckBox>

          <CheckBox
            style={styles.checkbox}
            checked={indeterminateChecked}
            indeterminate={indeterminate}
            onChange={onIndeterminateChange}>
            Indeterminate
          </CheckBox>

          <CheckBox
            style={styles.checkbox}
            disabled={true}>
            Disabled
          </CheckBox>

          <CheckBox
            style={styles.checkbox}
            disabled={true}
            checked={true}>
            Checked Disabled
          </CheckBox>
        </Layout>
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={index => setSelectedIndex(index)}>
          <Radio>Option 1</Radio>
          <Radio>Option 2</Radio>
          <Radio>Option 3</Radio>
        </RadioGroup>
        <View style={{marginVertical: 10}}>
          <Input
            placeholder='Place your Text'
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />
        </View>
        <Layout style={styles.container} level='1'>
        <Select
          selectedIndex={selectedIndexOpt}
          onSelect={index => setSelectedIndexOpt(index)}>
          <SelectItem title='Option 1'/>
          <SelectItem title='Option 2'/>
          <SelectItem title='Option 3'/>
        </Select>
      </Layout>
        <View style={styles.containerDate}>
          <Button onPress={() => setVisible(true)}>
            TOGGLE MODAL
          </Button>
          <SafeAreaView>
            <Modal
              visible={visible}
              backdropStyle={styles.backdrop}
              onBackdropPress={() => setVisible(false)}>
              <Card disabled={true}>
                <Text>Welcome to UI Kitten 😻</Text>
                <Button onPress={() => setVisible(false)}>
                  DISMISS
                </Button>
              </Card>
            </Modal>
          </SafeAreaView>
        </View>
        <Tooltip
          anchor={renderToggleButton}
          visible={visibleTooltip}
          accessoryLeft={InfoIcon}
          onBackdropPress={() => setVisible(false)}>
          Welcome to UI Kitten 😻
        </Tooltip>
      </ScrollView>
      <StatusBar style="dark"/>
    </SafeAreaView>
  );

};
const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  containerDate: {
    minHeight: 192,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCounter: {
    marginHorizontal: 8,
  },
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    margin: 2,
  },
  icon: {
    width: 32,
    height: 32,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    margin: 2,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
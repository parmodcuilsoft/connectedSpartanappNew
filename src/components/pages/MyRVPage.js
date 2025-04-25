/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, ScrollView, TextInput, View, Image} from 'react-native';
import {HeaderBar, ScreenWrapper} from '../ui';

import {RFPercentage} from 'react-native-responsive-fontsize';
import {Button, ThemeProvider} from 'react-native-elements';

//more info on AsyncStorage can be found here: https://react-native-async-storage.github.io/async-storage/docs/usage/
//  - it's local, persistent data storage

// had to remove the following from package.json
//    "@react-native-community/async-storage": "^1.7.1",
// it was causing conflicts with RNC_AsyncSQLitDBStorage

const MyRVPage = () => {
  const storage_Key = '@RV_info';
  //data to be stored as json
  const [myRVInfo, setMyRVInfo] = useState({
    vin: '',
    make: '',
    model: '',
    year: '',
  });
  // text input values
  const [vinInput, setVinInput] = useState();
  const [makeInput, setMakeInput] = useState();
  const [modelInput, setModelInput] = useState();
  const [yearInput, setYearInput] = useState();

  const [isEdit, setIsEdit] = useState(false);

  // store RV info in AsyncStorage
  const storeData = async () => {
    try {
      setMyRVInfo({
        vin: vinInput,
        make: makeInput,
        model: modelInput,
        year: yearInput,
      });
      // wasn't waiting for the useState myRVInfo to set before saving the data
      //    so, needed to just create the JSON object here rather than setting the
      //    myRVInfo variable and json.stringify-ing that
      const jsonRVInfo = JSON.stringify({
        vin: vinInput,
        make: makeInput,
        model: modelInput,
        year: yearInput,
      });
      await AsyncStorage.setItem(storage_Key, jsonRVInfo);
      alert('Data successfully saved');
    } catch (e) {
      alert('Failed to save the data to the storage');
    }
  };

  // get RV data from AsynStorage
  //  set myRVInfo if data is not null
  const getData = async () => {
    try {
      let data = null;
      data = await AsyncStorage.getItem(storage_Key);
      if (data !== null) {
        setMyRVInfo(JSON.parse(data));
        setVinInput(myRVInfo.vin);
        setMakeInput(myRVInfo.make);
        setModelInput(myRVInfo.model);
        setYearInput(myRVInfo.year);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  //fetch the data to display when opening this page
  useEffect(() => {
    getData();
  }, []);

  const mainContainer = {
    display: 'flex',
    width: '95%',
    marginLeft: '2.5%',
    marginTop: 10,
  };
  const inputContainer = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    height: 60,
    borderRadius: 5,
    marginBottom: 10,
  };
  const textInput = {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: '80%',
    color: 'black',
  };
  const inputTitle = {
    marginLeft: 10,
    fontSize: RFPercentage(2.3),
    color: 'black',
    fontFamily: 'SourceSansPro-Black',
    fontWeight: 'bold',
  };
  const inline = {flexDirection: 'row'};
  const theme = {
    Button: {
      buttonStyle: {
        backgroundColor: 'white',
        height: 125,
        padding: 20,
        margin: 5,
        marginLeft: 3,
        marginRight: 3,
        flexDirection: 'column',
      },
      titleStyle: {
        padding: 20,
        fontSize: RFPercentage(2.3),
        color: 'black',
        fontFamily: 'SourceSansPro-Black',
        fontWeight: 'bold',
        marginTop: 5,
      },
      containerStyle: {
        flex: 1,
      },
    },
  };

  return (
    <ScreenWrapper>
      <ScrollView style={{backgroundColor: '#3d3d3d'}}>
        <HeaderBar title="My RV Information" />
        <ThemeProvider theme={theme}>
          {/* Editing section 
                    if editing, then display edit form, if not, display RV info and edit button*/}
          {isEdit ? (
            // edit form
            <View style={mainContainer}>
              <View style={{display: 'flex', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 20, marginBottom: 10}}>
                  Enter your RV information below
                </Text>
                <View style={inputContainer}>
                  <Text style={inputTitle}>VIN#: </Text>
                  <TextInput
                    style={textInput}
                    onChangeText={text => setVinInput(text)}
                    value={vinInput}
                  />
                </View>

                <View style={inputContainer}>
                  <Text style={inputTitle}>Make: </Text>
                  <TextInput
                    style={textInput}
                    onChangeText={text => setMakeInput(text)}
                    value={makeInput}
                  />
                </View>

                <View style={inputContainer}>
                  <Text style={inputTitle}>Model: </Text>
                  <TextInput
                    style={textInput}
                    onChangeText={text => setModelInput(text)}
                    value={modelInput}
                  />
                </View>

                <View style={inputContainer}>
                  <Text style={inputTitle}>Year: </Text>
                  <TextInput
                    style={textInput}
                    onChangeText={text => setYearInput(text)}
                    value={yearInput}
                  />
                </View>
              </View>

              {/* save and cancel buttons */}
              <View style={inline}>
                <Button
                  type="solid"
                  title="Save"
                  onPress={() => {
                    storeData();
                    setIsEdit(!isEdit);
                  }}
                />
                <Button
                  type="solid"
                  title="Cancel"
                  onPress={() => {
                    setIsEdit(!isEdit);
                  }}
                />
              </View>
            </View>
          ) : (
            //RV info and edit button
            <View style={mainContainer}>
              {/* RV info */}
              <View
                style={{alignItems: 'center', marginBottom: 30, marginTop: 20}}>
                <View
                  style={{backgroundColor: 'white', width: '80%', padding: 10}}>
                  <View
                    style={{
                      backgroundColor: '#3d3d3d',
                      height: 80,
                      margin: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 26}}>
                      My RV Information
                    </Text>
                  </View>
                  <Text style={{fontSize: 18, padding: 10}}>
                    VIN#: {typeof myRVInfo === 'undefined' ? '' : myRVInfo.vin}
                  </Text>
                  <Text style={{fontSize: 18, padding: 10}}>
                    Make: {typeof myRVInfo === 'undefined' ? '' : myRVInfo.make}
                  </Text>
                  <Text style={{fontSize: 18, padding: 10}}>
                    Model:{' '}
                    {typeof myRVInfo === 'undefined' ? '' : myRVInfo.model}
                  </Text>
                  <Text style={{fontSize: 18, padding: 10}}>
                    Year: {typeof myRVInfo === 'undefined' ? '' : myRVInfo.year}
                  </Text>
                </View>
              </View>
              {/* edit button */}
              <Button
                title="Edit RV Information"
                icon={<Image source={require('../../assets/Edit.png')} />}
                buttonStyle={{flexDirection: 'row'}}
                onPress={() => setIsEdit(!isEdit)}
              />
            </View>
          )}
        </ThemeProvider>
      </ScrollView>
    </ScreenWrapper>
  );
};
export default MyRVPage;

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Button, ThemeProvider, Text} from 'react-native-elements';
// import TextInputMask from 'react-native-text-input-mask';

import theme from '../../../../styles/upperAccountFormTheme';
const form = {
  alignItems: 'center',
  backgroundColor: '#EFEEEC',
  margin: 20,
  zIndex: 100,
  position: 'absolute',
  width: '90%',
  paddingTop: 40,
  flex: 1,
};
const placeholderColor = '#6E6C7D';
const cancelButton = {backgroundColor: '#EFEEEC'};
const cancelButtonTitle = {color: placeholderColor};
const fullWidth = {
  width: '100%',
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 5,
  marginTop: 10,
};
const inputMaskLabelStyle = {
  fontFamily: 'SourceSansPro-SemiBold',
  fontSize: 16,
  fontWeight: 'bold',
  paddingBottom: 5,
};
const inputMaskStyle = {
  backgroundColor: 'white',
  width: '100%',
  paddingLeft: 10,
  shadowColor: 'black',
  shadowOffset: {width: 3, height: 3},
  shadowOpacity: 0,
  elevation: 4,
  height: 45,
};

const MaskedInput = ({label, ...otherProps}) => (
  <View style={fullWidth}>
    <Text style={inputMaskLabelStyle}>{label}</Text>
    {/* <TextInputMask style={inputMaskStyle} {...otherProps} /> */}
  </View>
);

const Form = ({
  user: {fName, lName, vin, email, phone, purchaseDate, make, model},
  submitForm,
  cancelEdit,
}) => {
  const [validEmail, setValidEmail] = useState(true);
  const [first, setFirst] = useState(fName);
  const [last, setLast] = useState(lName);
  const [vIN, setVIN] = useState(vin);
  const [mail, setMail] = useState(email);
  const [call, setCall] = useState(phone);
  const [dOfP, setDOfP] = useState(purchaseDate);
  const [mk, setMk] = useState(make);
  const [mdl, setMdl] = useState(model);
  const isEmpty = () => {
    return (
      first === '' &&
      last === '' &&
      vIN === '' &&
      mail === '' &&
      call === '' &&
      dOfP === '' &&
      mk === '' &&
      mdl === ''
    );
  };
  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const submit = () => {
    const user = {
      fName: first,
      lName: last,
      vin: vIN,
      email: mail,
      phone: call,
      purchaseDate: dOfP,
      make: mk,
      model: mdl,
    };
    submitForm(user);
  };

  return (
    <View style={form}>
      <ThemeProvider theme={theme}>
        <Text style={inputMaskLabelStyle}>
          Please fill out the account information
        </Text>
        <Input
          label="First name"
          value={first}
          onChangeText={t => setFirst(t)}
          placeholderTextColor={placeholderColor}
          textContentType="name"
        />
        <Input
          label="Last Name"
          value={last}
          onChangeText={t => setLast(t)}
          placeholderTextColor={placeholderColor}
          textContentType="familyName"
        />
        <Input
          label="VIN Number"
          value={vIN}
          onChangeText={t => setVIN(t)}
          placeholderTextColor={placeholderColor}
        />
        <Input
          label="Email"
          value={mail}
          onChangeText={t => setMail(t)}
          placeholderTextColor={placeholderColor}
          textContentType="emailAddress"
          errorStyle={{color: 'red', borderColor: 'red'}}
          errorMessage={validEmail ? '' : 'Please enter a valid email address'}
          onSubmitEditing={() => validateEmail()}
        />
        <MaskedInput
          label="Phone"
          value={call}
          onChangeText={t => setCall(t)}
          mask={'[000]-[000]-[0000]'}
          textContentType="telephoneNumber"
        />
        <MaskedInput
          label="Date of Purchase"
          value={dOfP}
          onChangeText={t => setDOfP(t)}
          mask={'[00]/[00]/[0000]'}
        />
        <Input
          label="Make"
          value={mk}
          onChangeText={t => setMk(t)}
          placeholderTextColor={placeholderColor}
        />
        <Input
          label="Model"
          value={mdl}
          onChangeText={t => setMdl(t)}
          placeholderTextColor={placeholderColor}
        />
        <View>
          <Button disabled={isEmpty()} title="Save" onPress={submit} />
          <Button
            buttonStyle={cancelButton}
            type="clear"
            titleStyle={cancelButtonTitle}
            title="Cancel"
            onPress={cancelEdit}
          />
        </View>
      </ThemeProvider>
    </View>
  );
};

export default Form;

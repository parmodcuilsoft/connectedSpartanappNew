/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import {
  HeaderBar,
  UpperDiagnostic,
  DiagList,
  ScreenWrapper,
  ErrorResponse,
  LoadingResponse,
} from '../ui';

const panelWrapper = { height: 200 };
const zeroPad = { padding: 0 };

import * as diagnosticCodes from '../../json/diag_codes.json';

delete diagnosticCodes.default;

const codes = Object.values(diagnosticCodes);

const DiagnosticScreen = () => {
  const [search, setSearch] = useState('');
  const [currentCodes, setCurrentCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const updateSearch = val => {
    setSearch(val);
    if (val !== '') {
      setLoading(true);
    } else {
      setCurrentCodes([]);
    }
  };
  const searchCodes = () => {
    setCurrentCodes(
      codes.filter(
        code =>
          String(code['SAE J1939 FMI']).includes(search) ||
          String(code['SAE J1939 SPN']).includes(search) ||
          String(code['Fault Code']).includes(search),
      ),
    );
  };

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        searchCodes();
        setLoading(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [loading]);
  return (
    <ScreenWrapper>
      <ScrollView style={zeroPad}>
        <HeaderBar title="Diagnostic Codes" />
        <View style={panelWrapper}>
          <UpperDiagnostic search={search} updateSearch={updateSearch} />
        </View>
        {loading ? (
          <LoadingResponse />
        ) : currentCodes.length > 0 || search.length === 0 ? (
          <DiagList codes={currentCodes} />
        ) : (
          <ErrorResponse />
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default DiagnosticScreen;

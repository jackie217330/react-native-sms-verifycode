/*
* @Author: edmond
* @Date:   2018-03-20 17:48:16
* @Last Modified by:   edmond
* @Last Modified time: 2018-03-22 09:35:31
*/

import { StyleSheet } from 'react-native';

import { getScreenWidth } from './util';

const styles = StyleSheet.create({
  container: {
    width: getScreenWidth(),
  },
  hiddenTextInput: {
    width: 1,
    height: 1,
    opacity: 0.001,
    backgroundColor: 'transparent',
  },
});

export default styles;

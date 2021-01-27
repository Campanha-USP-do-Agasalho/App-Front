import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../globalStyles';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  searchBar: {
    backgroundColor: colors.primary,
    height: 0.2 * height,
  },
  nameSearch: {
    height: 0.07 * height,
    width: 0.85 * width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    alignSelf: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 30,
    marginTop: 13,
    paddingHorizontal: 30,
  },
  nameSearchPlaceholder: {
    height: 0.08 * height,
    width: 0.9 * width,
    borderRadius: 30,
    marginTop: 13,
    alignSelf: 'center',
  },
  inputText: {
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  searchIcon: {
    alignSelf: 'auto',
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 13,
  },
  filterPlaceholder: {
    height: 0.15 * height,
    width: 0.9 * width,
    marginTop: 13,
    alignSelf: 'center',
  },

  PickerView: {
    marginLeft: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.black,
    overflow: 'hidden',
  },
  Picker: {
    backgroundColor: colors.white,
    height: 0.08 * height,
    width: 0.48 * width,
    paddingHorizontal: 0.027 * width,
  },
  line: {
    backgroundColor: colors.black,
    height: 1,
    width: 0.8 * width,
    alignSelf: 'center',
    margin: 5,
  },

});

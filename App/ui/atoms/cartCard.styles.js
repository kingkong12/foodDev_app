import { StyleSheet } from 'react-native';

export const cartCardStyles = StyleSheet.create({
  cardsCss: {
    backgroundColor: 'white',
    flex: 1,
    elevation: 5,
    marginRight: 4,
    width: '100%',
    borderBottomWidth: 1,

    height: '35%',
    flexDirection: 'row',
  },
description: {
    flexDirection: 'row',
    flex: 2,
  },
itemNameText: {
    fontWeight: 'bold',
    flex: 1,
    fontSize: 18,
    color: '#0681C7',
  },
prics: {
    textAlign: 'center',
    flex: 1,
    color: '#85BB65',
  },
pic: {
    width: '100%',
    height: '100%',
    minHeight: 70,
  },
modifyDetail: {
    flex: 1,
    paddingTop: 12,
  },
  moreDescription: {
    flex: 1,
    color: '#0681C7',
    paddingTop: 12,
    paddingLeft: 12,
  },

  itemQuantityText: {
    flex: 1,
    opacity: 0.5,
  },
  modifyamonut: {
    color: 'red',
    flex: 1,
    textAlign: 'center',
  },
});
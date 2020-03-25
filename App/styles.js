import {StyleSheet} from 'react-native';

export const bskyStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EFEFEF',
    top: '5%',
  },
  headerStyle: {
    color: '#0681C7',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalConatinerStyle:{
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center', 
  },
  finaltext: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  fianlCamount: {
    color: '#85BB65',
    fontSize: 24,
  },
  emptyText: {
    color: '#000',
    marginTop: 150,
    textAlign: 'center',
    opacity: 0.5,
  },
  modalContainer: {
    height: '20%',
    borderColor: '#0681C7',
    backgroundColor: '#fff',
    borderWidth: 1,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
  },
  pickerCotainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 2,
  },
  pickerStyle: {
    minWidth: '60%',
    height: '80%',
    borderWidth: 1,
    marginRight: 5,
    textAlign: 'center',
    borderColor: '#0681C7',
    alignContent: 'space-between',
  },
  description: {
    marginRight: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  buttonConatiner: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 5,
    paddingTop: 5,

  },
  hdMod: {
    paddingRight: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 2,
  },
  displaytltOCntainer:{
      flex: 2,  
    }
});



export const viewOrderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headerStyle: {
    minHeight: '8%',
    width: '100%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#EFEFEF',
    paddingTop: '4%',
  },
  headerTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '200',
    fontSize: 18,
    color: '#777777',
  },
  body: {
    margin: 15,
  },
  fieldHeader: {
    color: '#777777',
    fontWeight: 'bold',
    paddingBottom: 8,
    fontSize: 16,
  },
  detailContainer: {
    fontSize: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#EFEFEF',
    flexDirection: 'column',
    flexWrap: 'wrap',
    //    borderWidth: 1,
  },
  label: {
    color: '#777777',
    paddingBottom: 8,
    fontSize: 16,
  },
  restaurentAddressConatiner: {
    flexDirection: 'row',
  },
  addressField: {
    flexShrink: 1,
  },
  progressbarContainer: {
    flex: 1,
    paddingTop: 8,
  },
});


export const InformationStyles = StyleSheet.create({
cssImage: {
    backgroundColor: 'lightblue',
    width: '100%',
    height: '40%',
  },
cssImageStyle: {
    height: '100%',
    width: '100%',
  },
btnftr: {
    height: '7%',
  },
itemsHeders: {
    height: '53%',
     width: '100%',

  },
styleContainer: {
    paddingTop: 4,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

buttonText: {
    fontSize: 16,
    color: '#000',
  },
priceCss: {
    borderWidth: 1,
    paddingHorizontal: 12,
    borderColor: '#E9EEF7',
    fontSize: 12,
},
newPriceCss: {
    fontSize: 16,
    color: '#0681C7',
},
itemNameCss: {
    textShadowRadius: 1,
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    color: '#747883',
  },
descriptionContainer: {
    paddingHorizontal: 12,
    flex: 1,
    paddingVertical: 12,
     backgroundColor: '#fff9f8',
  },
  itemsDescription: {
    marginBottom: 8,
    fontSize: 14,
  },
btnCtr: {
    flexDirection: 'row',
    flex: 1,
  },
dropDown: {
    //borderRadius: 16,
   borderWidth: 1,
    height: 40,
    width: '40%',
    marginRight: 5,
    borderColor: '#0681C7',
  },
trbtn: {

    borderRadius: 0,
    width: '50%',
  },
clr: {
    width: '50%',
       borderRadius: 0,
  },
});


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



export const dadshBoardstyles = StyleSheet.create({
  bin: {
    flex: 1,
    marginTop: '2%',
    backgroundColor: '#F2F2F2',
    marginHorizontal: '2%',
    alignContent: 'center',
  },
});

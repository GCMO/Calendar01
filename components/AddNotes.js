import React from 'react'
import {Text, StyleSheet} from 'react-native'

const AddNotes = () => {
  return (
    <Text>AddNotes</Text>
    )
  }
  
  export default AddNotes;
  
  export const Styles = StyleSheet.create({
    addNotesContainer: {
      paddingTop: 20,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.color,
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  
  buttonText:{
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
  },

  input:{
    height: 40,
    width: '70%',
    paddingHorizontal: 18,
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderColor: Style.color,
    borderWidth: 1,
    borderRadius: 10,
  },

});

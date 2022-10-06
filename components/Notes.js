import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Style from '../assets/styles';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry, Layout, Icon } from '@ui-kitten/components';

const Notes = ({navigate}) => {
  return (
    <View style={styles.notesContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Notes...</Text>
          <View style={{flexDirection: 'row'}}>
            
            <TouchableOpacity style={[styles.button, {marginLeft:40}]}>
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.light}>
                <Icon name='trash-2-outline' fill='white' style={{width:25, height:50}}/>
              </ApplicationProvider>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.button} onPress={()=>NavigationPreloadManager.navigate('AddNote') }>
              <IconRegistry icons={EvaIconsPack} />
              <ApplicationProvider {...eva} theme={eva.light}>
                <Icon name='plus-outline' fill='white' style={{width:25, height:50}}/>
              </ApplicationProvider>
            </TouchableOpacity>

          </View>
      </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontWeight: '700', fontSize:18, color:Style.color}}>Total: </Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.searchContainer}>
          <TextInput placeholder='Search...' placeholderTextColot={Style.color} style={[styles.input, {borderWidth: 3} ]} />
          <TouchableOpacity style={[styles.searchButton, {width: 50}]}>
            <ApplicationProvider {...eva} theme={eva.light}>
              <Icon name='search' fill='white' style={{width:25, height:50}}/>
            </ApplicationProvider>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Clear</Text>
          </TouchableOpacity>

        </View>
    </View>
  )
}

export const styles = StyleSheet.create({

notesContainer: {
  paddingTop: 10,
  paddingHorizontal: 20,
  marginBottom: 70,
  opacity: 0.9,
},

heading: {
  fontSize: 30,
  fontWeight: '700',
  color: Style.color,
},

divider: {
  width:'100%',
  height: 2,
  backgroundColor: Style.color,
  marginTop: 10,
  marginBottom: 10,
},

item: {
  marginBottom: 20,
  padding: 15,
  color: 'black',
  opacity: 0.8,
  marginTop: 10,
  shadowColor: Style.color,
  shadowOpacity: 0.5,
  shadowOffset: {width: 0, height: 4},
  shadowRadius: 8,
  elevation: 5,
  backgroundColor: 'white',
  borderColor: Style.color,
  borderWidth: 1,
  borderRadius: 10,
},

index:{
  fontSize: 20,
  fontWeight: '700',
},  

headingContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
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

scrolView:{
  marginBottom: 70,
},

note:{
  flexDirection: 'row',
  width: '70%',
},

text: {
  fontWeight: '700',
  fontSize: 20,
  alignSelf: 'center',
},

delete:{
  color: Style.color,
  fontWeight: '700',
  fontSize: 20,
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

searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginVertical: 10,
},

searchButton: {
  backgroundColor: Style.color,
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  borderRadius: 10,
  height: 50,
},

searchButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: '700',
},

emptyNoteContainer:{
  alignItems: 'center',
  marginTop: 200,
},

emptyNoteText:{
  color: Style.color,
  fontSize: 18,
  fontWeight: '700',
},

dateContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 10,
},

});

export default Notes;
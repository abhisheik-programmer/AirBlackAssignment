import React from "react";
import { StyleSheet , Button , TextInput , View , Text } from "react-native";
import {Field, Formik} from 'formik';

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

const Form = () => {
  return (
    <View>
      <Formik 
      initialValues={{ name:" ",Number: " ", Profession:" ",Goal:" ",City:" "}}
       onSubmit={(values) => {
        console.log(values)
        }}
      >
        {
            (props)=>{

                <Form>
                    <Field type="text"></Field>
                </Form>
                
             }
        }
      </Formik>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})
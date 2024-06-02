import { StatusBar } from "expo-status-bar";
// import { Dropdown } from "react-native-element-dropdown";
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { useURL } from "expo-linking";
// import { Field, Form, Formik, FormikProps } from 'formik';

// import Form from './Form';
const img1 = {
  url: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg",
};
const img2 = {
  useURL:
    "https://www.figma.com/design/o3USDG1ICXttrzKeBPoPHW/Airblack%3A-Tech-Assignment?node-id=1-339&t=X6Q3tIr8kpWqFtce-4.png",
};
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" items-top m-0 p-0 justify-top bg-slate-700">
          {/* <Text className="text-white" >AirBlack</Text>
  <StatusBar style="auto" />
  <Link href="/Profile">Go to Profile</Link>
*/}
          <Image
            className="max-w-md"
            source={require("../assets/Project/Img1.jpg")}
          ></Image>
        </View>

        <View className="bg-black">
          <View className="m-4">
            <Text className="text-white text-4xl">
              Professional Online Makeup Course
            </Text>
            <Text className="text-white text-2xl">
              Learn from the best makeup artists in the world
            </Text>
            <Text>
              <Text className="bg-gray-500  rounded-xl text-white">
                Certification Programme{" "}
              </Text>
              <Text className="text-yellow-400">🌟 Rated 4.85/5</Text>
            </Text>

            <View>
              <Text></Text>
              <Text className="text-white text-sm">
                {" "}
                ✔️ India's N0.1 Online Makeup Course
              </Text>

              <Text></Text>
              <Text className="text-white text-sm">
                {" "}
                ✔️ Learn by LIVE Do-it Together Classes
              </Text>

              <Text></Text>
              <Text className="text-white text-sm">
                {" "}
                ✔️ Unlimited Practise Session to master skills
              </Text>
              <View className="bg-black h-96">
                <View className="m-4 border-r-2">
                  <View className=" bg-white">
                    <Text className="text-center bg-pink-600 text-white ">
                      Fill The Form Below To Enquire
                    </Text>
                    <View className=" m-5 p-5 text-center justify-center bg-white">
                      <View>
                        <Text> Enter your name</Text>
                        <TextInput className="border-2 border-black"></TextInput>
                      </View>
                      <View>
                        <Text> Enter WhatsApp Number</Text>
                        <TextInput className="border-2 border-black"></TextInput>
                      </View>

                      <View>
                        <Text> Enter Your Profession</Text>
                        <TextInput className="border-2 border-black"></TextInput>
                      </View>

                      <View>
                        <Text> Enter your goal</Text>
                        <TextInput className="border-2 border-black"></TextInput>
                      </View>

                      <View>
                        <Text> Enter your City</Text>
                        <TextInput className="border-2 border-black"></TextInput>
                      </View>

                      <Text></Text>
                      <View>
                        <Button
                          title="Submit"
                          className=" bg-pink-600"
                        ></Button>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="bg-red-600">
            {/* <ImageBackground
                 source={require("../assets/Project/WhatsApp Image 2024-06-02 at 12.37.39_2849902a.jpg")}
                ></ImageBackground> */}
            <Image
              source={require("../assets/Project/Img1.jpg")}
              className="max-w-md"
            ></Image>
          </View>

          {/* <View className="m-4">
                <Text className="text-center text-4xl text-white font-bold">Get Certified From India;s Biggest Beauty Platform</Text>
             </View> */}
          <View className="max-w-md">
            <Image
              className="bg-cover w-96"
              source={require("../assets/Project/Img2.jpg")}
            ></Image>
          </View>

          <View className="flex-1 justify-center">
            <Image
              className="min-w-fit max-w-md"
              source={require("../assets/Project/Img3.jpg")}
            ></Image>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

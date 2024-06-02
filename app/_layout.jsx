import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot,Stack } from "expo-router";

// const _layout = () => {
//   return (
//     <View style={styles.container}>
//       <Text>RootLayout</Text>
//     </View>
//   )
// }

// export default _layout

// const styles = StyleSheet.create({
//     container:{
//         display : 'flex',
//         flex : 1,
//         alignItems: "center",
//         justifyContent:'center'
//     }
// })

const RootLayout = () => {
  return (
    // <>
    //   <Text>Header</Text>
    //   <Slot />
    //   <Text>Footer</Text>
    // </>
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
    </Stack>
  );
};
export default RootLayout;

import { View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";

const _layout = () => {
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
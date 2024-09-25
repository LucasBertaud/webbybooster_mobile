import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleProp, ViewStyle } from 'react-native';

const Ahref = ({href, style, children}: {href: string, style?: StyleProp<ViewStyle>, children: React.ReactNode}) => {
  const openWebLink = () => {
    Linking.openURL(href);
  };

  return (
    <View style={style}>
      <TouchableOpacity onPress={openWebLink} activeOpacity={0.75}>
        <Text style={{ color: '#5fa6f9' }}>
            {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Ahref;

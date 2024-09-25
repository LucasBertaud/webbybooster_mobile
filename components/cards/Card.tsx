import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      overflow: 'hidden',
      width: "100%",
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
      borderColor: 'lightgrey',
      borderWidth: 1,
      marginBottom: 24,
    },
    header: {
        fontSize: 16,
        fontWeight: 'medium',
        marginTop: 8,
        marginLeft: 16,
        height: 36,
        alignContent: "center",
    },
});

function Card({children}: {children: React.ReactNode}) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}

const CardHeader = ({ title, style }: {title: string, style?: StyleProp<ViewStyle>}) => {
    return (
        <View style={style}>
            <Text style={styles.header}>{title}</Text>
        </View>
    );
  };
  
const CardBody = ({ children, style }: {children: React.ReactNode, style?: StyleProp<ViewStyle>}) => {
    return (
        <View style={style}>
            {children}
        </View>
    );
  };
  
const CardFooter = ({ children, style }: {children: React.ReactNode, style?: StyleProp<ViewStyle>}) => {
    return (
        <View style={style}>
            {children}
        </View>
    );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;  

export default Card
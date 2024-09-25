import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import Card from "./Card";

const Organization = ({title, imageSrc}: {title: string, imageSrc: string}) => {
    const image = {uri: imageSrc};
    return (
        <Card>
            <Card.Body>
                <Image style={styles.logo} source={image}></Image>
            </Card.Body>
            <Card.Footer>
                <Text style={styles.footer}>{title}</Text>
            </Card.Footer>
        </Card>
    ); 
};

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    fontSize: 16,
    fontWeight: 'medium',
    paddingLeft: 16,
    paddingVertical: 8,
    alignContent: "center",
  },
  logo: {
    minHeight: 150,
    width: "100%",
    resizeMode: "contain",
  }
});

export default Organization;
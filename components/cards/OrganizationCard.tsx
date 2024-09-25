import {Image, StyleSheet, Text} from "react-native";
import Card from "./Card";
import { SheetManager } from "react-native-actions-sheet";
import { OrganizationsMock } from "@/mock/organizations_mock";
import Organization from "@/entities/organization";

const OrganizationCard = ({id}: {id: number}) => {
  const organization: Organization | undefined = OrganizationsMock.find((organization: any) => organization.id === id);

  if (!organization) return null;

  const image = {uri: organization.getLogo()};

  return (
      <Card action={() => SheetManager.show("drawer-under-status-bar", 
        { payload: {
          organization: organization
        }
      })}>
          <Card.Body>
              <Image style={styles.logo} source={image}></Image>
          </Card.Body>
          <Card.Footer>
              <Text style={styles.footer}>{organization.getName()}</Text>
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

export default OrganizationCard;
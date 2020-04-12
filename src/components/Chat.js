import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, theme } from 'galio-framework';

export default function Chat(props) {
  return (
    <Card
      flex
      borderless
      style={styles.card}
      shadowColor={theme.COLORS.BLACK}
      title={props.name}
      caption="139 minutes ago"
      location="Los Angeles, CA"
      avatar="http://i.pravatar.cc/100?id=skater"
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: theme.SIZES.BASE / 2,
    padding: 10,
    margin: 5,
  },
});
import React from 'react';
import { Button, Icon, NavBar } from 'galio-framework';

export default function PageHeader(props) {
  return (
    <NavBar
      title="Dashboard"
      onLeftPress={() => props.navigation.openDrawer()}
      leftIconColor={theme.COLORS.MUTED}
      right={(
        <Button
          color="transparent"
          style={styles.settings}
          onPress={() => props.navigation.openDrawer()}
        >
          <Icon size={BASE_SIZE} name="heart" family="font-awesome" color={theme.COLORS.MUTED} />
        </Button>
      )}
      style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
    />
  )
}
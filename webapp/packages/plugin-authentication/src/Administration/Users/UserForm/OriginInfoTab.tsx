/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react-lite';
import styled from 'reshadow';

import { TabTitle, Tab, TabContainerTabComponent } from '@cloudbeaver/core-blocks';
import { Translate } from '@cloudbeaver/core-localization';
import { useStyles } from '@cloudbeaver/core-theming';

import type { IUserFormProps } from './UserFormService';

export const OriginInfoTab: TabContainerTabComponent<IUserFormProps> = observer(function OriginInfoTab({
  user,
  controller,
  editing,
  style,
  ...rest
}) {
  return styled(useStyles(style))(
    <Tab {...rest} style={style}>
      <TabTitle><Translate token={user.origin.displayName} /></TabTitle>
    </Tab>
  );
});

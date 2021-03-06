/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react-lite';
import styled from 'reshadow';

import {
  verticalRotatedTabStyles, Tab, TabIcon, TabTitle
} from '@cloudbeaver/core-blocks';
import { DynamicStyle, useStyles } from '@cloudbeaver/core-theming';

import type { IDatabaseDataModel } from '../../DatabaseDataModel/IDatabaseDataModel';
import type { DataPresentationOptions } from '../../DataPresentationService';

interface Props {
  model: IDatabaseDataModel<any>;
  presentation: DataPresentationOptions;
  className?: string;
  style?: DynamicStyle[] | DynamicStyle;
}

export const PresentationTab = observer(function PresentationTab({
  model,
  presentation,
  className,
  style,
}: Props) {
  const styles = useStyles(verticalRotatedTabStyles, style);

  if (presentation.getTabComponent) {
    const Tab = presentation.getTabComponent();

    return (
      <Tab
        tabId={presentation.id}
        className={className}
        style={verticalRotatedTabStyles}
        model={model}
        presentation={presentation}
        disabled={model.isLoading()}
      />
    );
  }
  return styled(styles)(
    <Tab
      tabId={presentation.id}
      style={[verticalRotatedTabStyles, style]}
      disabled={model.isLoading()}
    >
      <TabIcon icon={presentation.icon} />
      <TabTitle>{presentation.title}</TabTitle>
    </Tab>
  );
});

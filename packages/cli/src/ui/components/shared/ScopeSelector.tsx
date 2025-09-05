/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type React from 'react';
import { Box, Text } from 'ink';
import type { SettingScope } from '../../../config/settings.js';
import { getScopeItems } from '../../../utils/dialogScopeUtils.js';
import { RadioButtonSelect } from './RadioButtonSelect.js';

interface ScopeSelectorProps {
  /** Callback function when a scope is selected */
  onSelect: (scope: SettingScope) => void;
  /** Callback function when a scope is highlighted */
  onHighlight: (scope: SettingScope) => void;
  /** Whether the component is focused */
  isFocused: boolean;
}

export function ScopeSelector({
  onSelect,
  onHighlight,
  isFocused,
}: ScopeSelectorProps): React.JSX.Element {
  const scopeItems = getScopeItems();

  return (
    <Box flexDirection="column">
      <Text bold={isFocused} wrap="truncate">
        {isFocused ? '> ' : '  '}Apply To
      </Text>
      <RadioButtonSelect
        items={scopeItems}
        initialIndex={0} // Default to User Settings
        onSelect={onSelect}
        onHighlight={onHighlight}
        isFocused={isFocused}
        showNumbers={isFocused}
      />
    </Box>
  );
}

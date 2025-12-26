import React from 'react';

export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}
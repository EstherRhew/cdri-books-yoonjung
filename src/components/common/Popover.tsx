// components/PopoverWrapper.tsx

import * as Popover from '@radix-ui/react-popover';
import { ReactNode } from 'react';

interface PopoverWrapperProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactNode;
  children: ReactNode;
  sideOffset?: Popover.PopoverContentProps['sideOffset'];
  side?: Popover.PopoverContentProps['side'];
  align?: Popover.PopoverContentProps['align'];
}

export const PopoverWrapper = ({
  open,
  onOpenChange,
  trigger,
  sideOffset = 8,
  side = 'bottom',
  align = 'center',
  children,
}: PopoverWrapperProps) => {
  return (
    <Popover.Root open={open} onOpenChange={onOpenChange}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Content className="popover-content" side={side} align={align} sideOffset={sideOffset}>
        {children}
      </Popover.Content>
    </Popover.Root>
  );
};

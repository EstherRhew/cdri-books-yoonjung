import { useState } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from '../assets/image';
import { Image } from './Image';
import { PopoverWrapper } from './Popover';
import { Text } from './Text';

interface SelectProps<T> {
  options: T[];
  selectedOption: T;
  setSelectedOption: (option: T) => void;
  defaultOption?: T;
}

export const Select = <T extends { id: string; text: string }>({
  options,
  selectedOption,
  setSelectedOption,
}: SelectProps<T>) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const onSelect = (option: T) => {
    setSelectedOption(option);
    setOpenOptions(false);
  };

  return (
    <StyledSelect>
      <PopoverWrapper
        open={openOptions}
        onOpenChange={setOpenOptions}
        sideOffset={10}
        trigger={
          <div className="trigger-button">
            <Text variant="body2Bold">{selectedOption.text}</Text>
            <Image src={ArrowIcon} alt="arrow" width="10.5px" height="6px" className="arrow" />
          </div>
        }
      >
        <div className="options">
          {options.map(opt => {
            if (opt === selectedOption) return null;
            return (
              <div onClick={() => onSelect(opt)} key={opt.id}>
                <Text variant="body2">{opt.text}</Text>
              </div>
            );
          })}
        </div>
      </PopoverWrapper>
    </StyledSelect>
  );
};

const StyledSelect = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .trigger-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }

  .popover-content {
    width: var(--radix-popover-trigger-width);
    max-height: var(--radix-popover-content-available-height);
  }

  .options {
    width: 100px;
    padding: 0px 8px;
    background-color: ${({ theme }) => theme.colors.palette.white};
    color: ${({ theme }) => theme.colors.text.subtitle};
    box-shadow: 0px 0px 4px 0px #00000040;

    > div {
      height: 30px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
`;

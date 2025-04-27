import { InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../components/common/Button';
import { Select } from '../../../components/common/Select';

interface AdvancedSearchProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  options: T[];
  search?: (item: string, option: T) => void;
}

export const AdvancedSearchDialog = <T extends { id: string; text: string }>({
  options,
  search,
  ...props
}: AdvancedSearchProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<T>(options[0]);

  return (
    <StyledAdvancedSearch>
      <div className="search-area">
        <div className="filter">
          <Select options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Select>
        </div>
        <div className="input">
          <input
            type={props.type || 'text'}
            placeholder={props.placeholder || '검색어 입력'}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      </div>
      <Button
        variant="primary"
        size="large"
        style={{ width: '100%', height: '36px' }}
        onClick={() => {
          search?.(String(props.value) || '', selectedOption);
        }}
      >
        검색하기
      </Button>
    </StyledAdvancedSearch>
  );
};

const StyledAdvancedSearch = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 360px;
  box-shadow: 0px 4px 14px 6px #97979726;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.palette.white};
  .search-area {
    display: flex;
    align-items: center;
    height: 36px;
    gap: 8px;

    .filter {
      height: 100%;
      width: 100px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.palette.border};
      padding: 4px;
    }
    .input {
      flex: 1;
      border-bottom: 1px solid ${({ theme }) => theme.colors.palette.primary};
      padding: 4px;
    }
  }
`;

import { InputHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CloseBlackIcon, SearchIcon } from '../assets/image';
import { Image } from './Image';
import { Text } from './Text';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  history?: string[];
  onDeleteHistoryItem?: (item: string) => void;
  search?: (item: string) => void;
}

export const Search = ({ history, onChange, onDeleteHistoryItem, search, ...props }: SearchProps) => {
  const [showHistory, setShowHistory] = useState(false);

  const onClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.search-history') && !target.closest('.search-bar')) {
      setShowHistory(false);
    }
  };

  useEffect(() => {
    if (showHistory) {
      document.addEventListener('click', onClickOutside);
    } else {
      document.removeEventListener('click', onClickOutside);
    }

    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, [showHistory]);

  const hasHistory = history && history.length > 0;

  const onClickHistory = (item: string) => {
    search?.(item);
    setShowHistory(false);
  };

  return (
    <StyledSearch $showHistory={!!hasHistory && showHistory}>
      <div className="search-bar">
        <Image src={SearchIcon} alt="search" width="30px" height="30px" />
        <input
          value={props.value}
          type={props.type || 'text'}
          placeholder={props.placeholder || '검색어를 입력하세요'}
          onChange={onChange}
          onKeyDown={e => {
            if (search && e.key === 'Enter') {
              search(e.currentTarget.value || '');
            }
          }}
          onFocus={() => {
            setShowHistory(!!hasHistory);
          }}
        />
      </div>

      {hasHistory && showHistory && (
        <div className="search-history">
          {history?.map(item => (
            <div className="search-history-item" onClick={() => onClickHistory(item)} key={item}>
              <Text variant="caption" color="subtitle">
                {item}
              </Text>
              <button
                className="button-delete"
                onClick={e => {
                  e.stopPropagation();
                  onDeleteHistoryItem?.(item);
                }}
              >
                <Image src={CloseBlackIcon} alt="delete" />
              </button>
            </div>
          ))}
        </div>
      )}
    </StyledSearch>
  );
};

const StyledSearch = styled.div<{ $showHistory: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 11px;
  width: 480px;
  min-height: 50px;
  height: 100%;
  border-radius: ${({ $showHistory }) => ($showHistory ? '24px 24px 0px 0px' : '100px')};
  background-color: ${({ theme }) => theme.colors.palette.lightGray};
  position: relative;

  .search-bar {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-left: 10px;
    input {
      flex: 1;
      width: 100%;
      height: 100%;
      padding-left: 18px;
    }
  }

  .search-history {
    display: flex;
    flex-direction: column;
    padding: 10px 0px 20px 50px;
    gap: 20px;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.palette.lightGray};
    border-radius: 0px 0px 24px 24px;
    z-index: 1;
    .search-history-item {
      position: relative;
      cursor: pointer;
      .button-delete {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 20px;
        top: 0px;
      }
    }
  }
`;

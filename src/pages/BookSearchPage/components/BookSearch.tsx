import { useEffect, useState } from 'react';
import { Button } from '../../../components/common/Button';
import { PopoverWrapper } from '../../../components/common/Popover';
import { Text } from '../../../components/common/Text';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useSearch } from '../../../hooks/useSearch';
import { BookSearchTarget } from '../../../services/book/book.type';
import { advancedSearchOptions } from '../config/constants';
import { AdvancedSearchDialog } from './AdvancedSearchDialog';
import { SearchInput } from './SearchInput';

interface BookSearchProps {
  setSearchKeyword: (keyword: string) => void;
  setAdvancedSearchOption: (option: BookSearchTarget) => void;
}

export const BookSearch = ({ setSearchKeyword, setAdvancedSearchOption }: BookSearchProps) => {
  // 전체검색
  const { searchKeyword, search, inputValue: baseInputValue, setInputValue: setBaseInputValue } = useSearch();
  // 상세검색
  const { inputValue: advancedInputValue, setInputValue: setAdvancedInputValue } = useSearch();

  const [openAdvancedSearchDialog, setOpenAdvancedSearchDialog] = useState(false);

  const {
    items: searchHistory,
    addItem: addSearchHistory,
    removeItem: removeSearchHistory,
  } = useLocalStorage<string>('book-search-history', 8);

  const onSearch = (item: string) => {
    if (!item) return;
    addSearchHistory(item);
    search(item);
    setBaseInputValue(item);
  };

  const onSearchAdvanced = (item: string, targetOption: { id: BookSearchTarget; text: string }) => {
    if (!item) return;
    search(item);
    setAdvancedSearchOption(targetOption.id);
    setBaseInputValue('');
    setOpenAdvancedSearchDialog(false);
  };

  useEffect(() => {
    if (!searchKeyword) return;
    setSearchKeyword(searchKeyword);
  }, [searchKeyword]);

  return (
    <div className="search-box">
      <SearchInput
        search={onSearch}
        history={[...searchHistory].reverse()}
        onDeleteHistoryItem={removeSearchHistory}
        value={baseInputValue}
        onChange={e => setBaseInputValue(e.currentTarget.value)}
      />

      <PopoverWrapper
        open={openAdvancedSearchDialog}
        onOpenChange={setOpenAdvancedSearchDialog}
        sideOffset={16}
        trigger={
          <Button variant="tertiary" size="small">
            <Text variant="body2" color="subtitle">
              상세검색
            </Text>
          </Button>
        }
      >
        <AdvancedSearchDialog
          options={advancedSearchOptions}
          value={advancedInputValue}
          onChange={e => setAdvancedInputValue(e.currentTarget.value)}
          search={onSearchAdvanced}
        />
      </PopoverWrapper>
    </div>
  );
};

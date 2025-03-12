import { useMemo } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { FestivalType } from 'src/api';

export default function useFestivalFilter(
  festivals: FestivalType[] = [],
  searchKeyword: string
): FestivalType[] {
  const [debouncedSearch] = useDebouncedValue(searchKeyword, 300);

  return useMemo(() => {
    return festivals.filter((festival) =>
      festival.name
        ?.toLocaleLowerCase()
        .includes(debouncedSearch.toLocaleLowerCase())
    );
  }, [festivals, debouncedSearch]);
}

import { renderHook } from '@testing-library/react';
import useFestivalFilter from './useFestivalFilter';

const mockFestivals = [
  { id: '1', name: 'Wacken Open Air' },
  { id: '2', name: 'Hellfest' },
];

it('filters festivals by searching by name', () => {
  const { result } = renderHook(() => useFestivalFilter(mockFestivals, 'Wa'));
  expect(result.current).toHaveLength(1);
  expect(result.current[0].name).toBe('Wacken Open Air');
});

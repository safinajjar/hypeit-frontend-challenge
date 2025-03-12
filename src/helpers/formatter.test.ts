import { formatDate } from './formatter';

describe('format Date', () => {
  it('should format a valid date string correctly', () => {
    expect(formatDate('2023-12-25T15:30:00Z')).toBe('25.12.2023');
  });

  it('should return "Invalid Date" for an empty string', () => {
    expect(formatDate('')).toBe('Invalid Date');
  });
});

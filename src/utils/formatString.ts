export const formatPrice = (value: number | string): string => {
  const number = typeof value === 'string' ? parseInt(value, 10) : value;
  if (isNaN(number)) return '-';

  return `${number.toLocaleString('ko-KR')}원`;
};

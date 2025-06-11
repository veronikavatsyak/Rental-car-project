export const formatMileage = mileage => {
  if (typeof mileage !== 'number') return '';
  return `${mileage.toLocaleString('en-US').replace(/,/g, ' ')} km`;
};

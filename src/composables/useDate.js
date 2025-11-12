function useDate(isoDateString) {
  if(!isoDateString) return 'N/A';

  const date = new Date(isoDateString);

  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];

  return `${day} ${month}`;
}

export default useDate;

const convertTimeStampToHrMin = timestamp => {
  const date = new Date(timestamp * 1000);
  const hour = ('0' + date.getHours()).slice(-2);
  const mins = ('0' + date.getMinutes()).slice(-2);
  return `${hour}:${mins}`;
};

export default convertTimeStampToHrMin;

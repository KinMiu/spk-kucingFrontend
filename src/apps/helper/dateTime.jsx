import { format } from 'date-fns';

const FormatDateAndTime = (dateTimeString) => {
  const date = new Date(dateTimeString);

  // Memformat tanggal
  const formattedDate = format(date, 'yyyy-MM-dd'); // atau format lain yang Anda butuhkan

  // Memformat waktu
  const formattedTime = format(date, 'HH:mm:ss'); // atau format lain yang Anda butuhkan

  return {
    formattedDate,
    formattedTime,
  };
};

export default FormatDateAndTime;
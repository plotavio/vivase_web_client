export const format = (date: Date) => {
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  return formattedDate;
};

export const formatWithHour = (date: Date) => {
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return formattedDate;
};

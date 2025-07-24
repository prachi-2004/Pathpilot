export const formatProgress = (progress) => {
  return Math.round(progress * 100) + '%';
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};
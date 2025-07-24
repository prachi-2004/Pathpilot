const generateRandomString = (length = 32) => {
  return require('crypto').randomBytes(length).toString('hex');
};

const formatResponse = (success, data = null, message = '') => {
  return {
    success,
    ...(data && { data }),
    ...(message && { message })
  };
};

const paginate = (array, page = 1, limit = 10) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const result = {};
  
  if (endIndex < array.length) {
    result.next = {
      page: page + 1,
      limit
    };
  }
  
  if (startIndex > 0) {
    result.previous = {
      page: page - 1,
      limit
    };
  }
  
  result.results = array.slice(startIndex, endIndex);
  result.total = array.length;
  result.currentPage = page;
  
  return result;
};

module.exports = {
  generateRandomString,
  formatResponse,
  paginate
};
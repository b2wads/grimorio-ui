export const uniqueId = (prefix = 'id') => {
  // Convert it to base 36 (numbers + letters), and grab the first 5 characters
  // after the decimal.
  return `${prefix}_${Math.random().toString(36).substr(2, 5)}`;
};

export const ommit = (object = {}, ommisionArray = []) => {
  return ommisionArray.reduce((acc, current) => {
    delete object[current];
    acc = { ...object };
    return acc;
  }, {});
};

export const getPageRange = ({ offset, limit, count }) => {
  const currentPage = Math.ceil(offset / limit) + 1;
  const maxPages = Math.ceil(count / limit);
  let start = 1;
  let end = 10;

  if (maxPages <= 10) {
    // less than 10 total pages so show all
    start = 1;
    end = maxPages;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (currentPage <= 6) {
      start = 1;
      end = 10;
    } else if (currentPage + 4 >= maxPages) {
      start = maxPages - 9;
      end = maxPages;
    } else {
      start = currentPage - 5;
      end = currentPage + 4;
    }
  }

  const range = [];
  for (let i = start; i < end + 1; ++i) {
    range.push(i);
  }

  return {
    range,
    currentPage,
    lastPage: maxPages,
  };
};

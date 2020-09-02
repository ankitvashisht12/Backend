module.exports = (link, hasNextPage) => {
  if (link) {
    const linksArray = link.split(',');
    // eslint-disable-next-line no-restricted-syntax
    for (const elem of linksArray) {
      const linkArray = elem.split(';');
      if (linkArray.length > 1 && linkArray[1].includes('rel="next"')) {
        // eslint-disable-next-line no-param-reassign
        hasNextPage = true;
        break;
      }
    }
  }

  return hasNextPage;
};

export const modifyfullAddressString = (str: string) => {
  return str
    .replace(', England', '')
    .replace(', United Kingdom', '')
    .replace(', Greater London', '');
};

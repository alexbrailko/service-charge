export function valid_postcode(postcode: string) {
  postcode = postcode.replace(/\s/g, '');
  const regex = /^([A-Z][A-HJ-Y]?\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/i;
  return regex.test(postcode);
}

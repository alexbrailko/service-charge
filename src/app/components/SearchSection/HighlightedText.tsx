import { FC } from 'react';

export const HighlightedText: FC<{ text: string; highlight: string }> = ({
  text,
  highlight
}) => {
  if (!highlight.trim()) return <>{text}</>;

  // UK postcode regex that handles all valid formats:
  // AA9A 9AA  | A9A 9AA  | A9 9AA   | A99 9AA  | AA9 9AA
  // AA99 9AA  | AA9A 9AA | A99A 9AA | AA99A 9AA
  const postcodeRegex = /[A-Z]{1,2}[0-9][0-9A-Z]?\s*[0-9][A-Z]{2}/gi;
  const postcodeMatch = text.match(postcodeRegex);
  const postcode = postcodeMatch ? postcodeMatch[0] : null;

  // If there's a postcode in the text and the search term might be a postcode
  if (postcode) {
    const normalizedPostcode = postcode.replace(/\s+/g, '').toUpperCase();
    const normalizedHighlight = highlight.replace(/\s+/g, '').toUpperCase();

    // Check if the search term matches the postcode
    if (normalizedPostcode.includes(normalizedHighlight)) {
      // Find the position of the postcode in the original text
      const postcodeIndex = text.indexOf(postcode);

      // Find the position in the normalized postcode
      const normalizedPostcodeIndex =
        normalizedPostcode.indexOf(normalizedHighlight);

      // Calculate the actual position in the original postcode
      let originalIndex = 0;
      let normalizedIndex = 0;

      // Match the normalized position to the original position accounting for spaces
      while (normalizedIndex < normalizedPostcodeIndex) {
        if (postcode[originalIndex] !== ' ') {
          normalizedIndex++;
        }
        originalIndex++;
      }

      // Calculate the end position accounting for spaces
      let highlightLength = 0;
      let currentIndex = originalIndex;
      let normalizedCount = 0;

      while (
        normalizedCount < highlight.replace(/\s+/g, '').length &&
        currentIndex < postcode.length
      ) {
        if (postcode[currentIndex] !== ' ') {
          normalizedCount++;
        }
        highlightLength++;
        currentIndex++;
      }

      return (
        <>
          {text.substring(0, postcodeIndex)}
          {postcode.substring(0, originalIndex)}
          <strong className="font-bold bg-yellow-100">
            {postcode.substring(originalIndex, originalIndex + highlightLength)}
          </strong>
          {postcode.substring(originalIndex + highlightLength)}
          {text.substring(postcodeIndex + postcode.length)}
        </>
      );
    }
  }

  // If no postcode match, do regular text highlighting
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <strong key={index} className="font-bold bg-yellow-100">
            {part}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

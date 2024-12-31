export const generateUniqueUrl = (cardId: string): string => {
  const baseUrl = window.location.origin;
  return `${baseUrl}/card/${cardId}`;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};
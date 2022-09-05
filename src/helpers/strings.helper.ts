export const capitalize = (item: string) => {
  if (item) {
    const lowered = item.toLowerCase();
    return lowered.replace(lowered[0], lowered[0].toUpperCase());
  }
};

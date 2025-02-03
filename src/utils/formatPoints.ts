export const formatPoints = (points: number): string => {
    if (points >= 1000000) {
      const millions = points / 1000000;
      return `${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}m`;;
    }
    if (points >= 1000) {
      const thousands = points / 1000;
      return `${thousands % 1 === 0 ? thousands.toFixed(0) : thousands.toFixed(1)}k`;;
    }
    return points.toString();
  };
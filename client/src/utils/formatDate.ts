import { format, formatDistanceToNow } from 'date-fns';

export const formatCreatedAt = (timestamp: string): string => {
    const now = new Date();
    const postDate = new Date(timestamp);
  
    
    const diffInDays = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
  
    
    if (diffInDays < 1) {
      const relativeTime = formatDistanceToNow(postDate, { addSuffix: true }); 
      const cleanedTime = relativeTime.replace(/^in /i, '');

      return cleanedTime
      .replace(/minutes?/, 'min')
      .replace(/hours?/, 'h');
    }
  
   
    return format(postDate, 'MMM do'); 
  };


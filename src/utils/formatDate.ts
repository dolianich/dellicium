import { format, formatDistanceToNow } from 'date-fns';

export const formatCreatedAt = (timestamp: string): string => {
    const now = new Date();
    const postDate = new Date(timestamp);
  
    
    const diffInDays = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));
  
    
    if (diffInDays < 1) {
      return formatDistanceToNow(postDate, { addSuffix: true }); 
    }
  
   
    return format(postDate, 'MMM do'); 
  };


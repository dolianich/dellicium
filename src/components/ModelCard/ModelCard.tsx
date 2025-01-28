import { Link } from 'react-router-dom';

interface Props {
  link: string;
  name: string;
}

const ModelCard = ({ link, name }: Props) => {
  return <Link to={link}>{name}</Link>;
};

export default ModelCard;


import {
  FiHome,
  FiTrendingUp,
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface LinkItemProps {
    name: string;
    icon: IconType;
    link: string;
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, link: '' },
    { name: 'Fontys', icon: FiTrendingUp, link: 'fontys' },
  ];

export default LinkItems;
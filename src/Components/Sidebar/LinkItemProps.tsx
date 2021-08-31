
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
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
    { name: 'Explore', icon: FiCompass, link: 'explore' },
    { name: 'Favourites', icon: FiStar, link: 'favourites' },
    { name: 'Settings', icon: FiSettings, link: 'settings' },
  ];

export default LinkItems;
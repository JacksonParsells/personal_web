import SidebarItem from '../types/SidebarItem';
import * as FaIcons from 'react-icons/fa';

/**
 * an array of sidebar items to be rendered in the entire sidebar
 * @author Jackson Parsells
 */
const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/#intro',
        icon: <FaIcons.FaHome />,
    },
    {
        title: 'About',
        path: '/#about',
        icon: <FaIcons.FaUser />,
    },
    {
        title: 'Experience',
        path: '/#experience',
        icon: <FaIcons.FaBriefcase />,
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <FaIcons.FaNewspaper />,
    },
    {
        title: 'Contact',
        path: 'mailto:jackson@parsells.net',
        icon: <FaIcons.FaEnvelope />,
    },
];

export default SidebarData;
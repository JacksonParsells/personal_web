/**
 * object containing social media links
 * @author Jackson Parsells
 */

import SocialMedia from '../types/SocialMedia';
import * as FaIcons from 'react-icons/fa';

const SocialsData: SocialMedia[] = [
    {
        platform: 'GitHub',
        link: 'https://github.com/JacksonParsells/',
        icon: <FaIcons.FaGithub />,
    },
    {
        platform: 'LinkedIn',
        link: 'https://www.linkedin.com/in/john-parsells/',
        icon: <FaIcons.FaLinkedin />,
    },
    {
        platform: 'Twitter',
        link: 'https://twitter.com/jacksonparsells',
        icon: <FaIcons.FaTwitter />,
    },
    {
        platform: 'Instagram',
        link: 'https://www.instagram.com/jacksonparsells/',
        icon: <FaIcons.FaInstagram />,
    },
];

export default SocialsData;
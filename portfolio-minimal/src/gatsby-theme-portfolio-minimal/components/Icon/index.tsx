import React from 'react';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaFigma,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
    FaYoutube,
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

interface IconProps {
    name: string;
    color?: string;
}

export function Icon(props: IconProps): React.ReactElement | null {
    if (!props.name) return null;
    const name = props.name.toLowerCase();

    const iconMap: { [key: string]: React.ElementType } = {
      github: FaGithub,
      external: FiExternalLink,
      figma: FaFigma,
      linkedin: FaLinkedin,
      twitter: FaTwitter,
      mail: FaEnvelope,
      youtube: FaYoutube,
    };
  
    const IconComponent = iconMap[props.name.toLowerCase()];
    if (!IconComponent) return null;

    const style =
        name === 'external'
            ? { fill: 'none', stroke: 'currentColor' }
            : undefined;
  
    return IconComponent ? <IconComponent color={props.color} style={style}/> : null;
  }
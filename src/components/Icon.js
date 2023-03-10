import React from 'react';
import { SvgUri } from 'react-native-svg';
import About from "../icons/About.svg"

export default function Icon(name) {
    let icon = '';

    switch (name) {
        case 'about':
            icon = About;
            break;
        default:
            break;
    }

    return (
        <SvgUri
            uri={icon}
        />
    )
}
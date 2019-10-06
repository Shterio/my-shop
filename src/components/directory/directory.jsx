import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import Sections from "../../directory.data";
import './directory.styles.scss'

export default class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: Sections
        };
    }

    render() {
        const { sections } = this.state;
        return (
            <div className='directory-menu'>
                {sections.map(({ id, ...sectionsProps }) => (
                    <MenuItem key={id} {...sectionsProps} />
                ))}
            </div>
        )
    }
}

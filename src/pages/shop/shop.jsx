import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

export class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                {collections.map(({ id, ...collectionsProps }) => (
                    <CollectionPreview key={id} {...collectionsProps} />
                ))}
            </div>
        )
    }
}

export default Shop

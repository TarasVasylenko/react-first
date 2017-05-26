    import * as React from 'react';

    import '../css/main.css';

    import Slider, { Range } from 'rc-slider';
    import 'rc-slider/assets/index.css';

    import { Product } from './product';
    import { bankOffers } from './data';

    export class Products extends React.Component<any, any> {
        constructor(props) {
            super(props);
            this.state = { products: bankOffers }
        }

    render() {
        let { products } = this.state;

        return (
            <div>
                <div className="container">
                    <div className="content">
                        <div className="slider-1"><Slider /></div>
                        <div>
                        <label>
                            <input className="checkbox" type="checkbox" name="checkbox" />
                            <div className="checkbox-decor"></div>
                            <div className="label">только без процентов</div>
                        </label>
                        </div>
                        { products.map((item, i) => <Product item={ item } key= { i } /> ) }
                    </div>
                </div>
            </div>
            );
        }
    }



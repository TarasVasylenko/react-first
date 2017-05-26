    import * as React from "react";

    import '../css/main.css';

    import Slider, { Range } from 'rc-slider';
    import 'rc-slider/assets/index.css';

    import { Product } from './product';

    const data = [ { nameProduct: 'Быстрозайм', toPay: 1600, bodyCredit: 100, daysToPay: 5, limitSumm: '100-300', limitTerm: '1-30', imgAddress: "../../src/img/bystro-zaym.png", sale: '90%' },
                   { nameProduct: 'Soscredit', toPay: 1200, bodyCredit: 100, daysToPay: 5, limitSumm: '100-300', limitTerm: '1-30', imgAddress: "../../src/img/soscredit.PNG", sale: '90%' },
                   { nameProduct: 'Moneyveo', toPay: 2400, bodyCredit: 100, daysToPay: 5, limitSumm: '100-300', limitTerm: '1-30', imgAddress: "../../src/img/moneyveo.PNG", sale: '90%' } 
                 ];

    export class Products extends React.Component<any, any> {
        constructor(props) {
            super(props);
            this.state = { products: data }
        }


    render() {
        let { products } = this.state;

        return (
            <div>
                <div className="container">
                    <div className="content">
                        <div className="slider-1"><Slider /></div>
                        { products.map((item, i) => <Product item={ item } key= { i } /> ) }
                    </div>
                </div>
            </div>
            );
        }
    }



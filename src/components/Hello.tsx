import * as React from "react";

import '../css/main.css';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const data = [ { toPay: 1600, bodyCredit: 100, daysToPay: 5, limitSumm: '100-300', limitTerm: '1-30' },
               { toPay: 1200, bodyCredit: 100, daysToPay: 5, limitSumm: '100-300', limitTerm: '1-30' },
               { toPay: 2400, bodyCredit: 100, daysToPay: 5, limitSumm: '100-300', limitTerm: '1-30' } 
             ];

const Product = ({ item }) => {
    return <div className="section-2__block">

        <div className="section-2__block-title">
        <div className="section-2__block-img">
        <img src="../../src/img/bystro-zaym.png" alt="img"/>
        </div>
        <h5>Быстро Займ</h5>
        </div>

        <div className="section-2__count">

        <div className="row section-2__str-1">
        <div className="col-30 first">К выплате</div>
        <div className="col-40 str-1">Тело кредита</div>
        <div className="col-30 last">Количество дней</div>
        </div>

        <div className="row section-2__str-2">
        <div className="col-30 first"><span className="ft-size--25">1600</span> грн</div>
        <div className="col-40 str-2">
        <div className="el-1">+</div>
        <div className="el-2"><span className="ft-size--20 value-slider-1"></span> грн</div>
        <div className="el-3">=</div>
        </div>
        <div className="col-30 last str-2"><span className="ft-size--20 value-slider-2"></span> дней</div>
        </div>

        <div className="row section-2__str-3">
        <div className="col-30 first">Сумма</div>
        <div className="col-40 str-3">Срок</div>
        <div className="col-30"></div>
        </div>

        <div className="row section-2__str-4">
        <div className="col-30 first">100-3000 грн</div>
        <div className="col-40 str-4">1-30 дней</div>
        <div className="col-30"></div>
        </div>

        </div>

        <div className="bid"><a href="#">Оформить заявку</a></div>

        <div className="section-2__sale">90% кредит</div>
        </div>
};


export class Hello extends React.Component<any, any> {
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

        

            </div>
        </div>


        </div>
        );


    }
}



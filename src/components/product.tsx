    import * as React from 'react';

    export const Product = ({ item }) => {
    return (
    <div className="section-2__block">

        <div className="section-2__block-title">
            <div className="section-2__block-img">
                <img src={ item.imgAddress } alt="img"/>
            </div>
            <h5>{ item.nameProduct }</h5>
        </div>

        <div className="section-2__count">
            <div className="row section-2__str-1">
                <div className="col-30 first">К выплате</div>
                <div className="col-40 str-1">Тело кредита</div>
                <div className="col-30 last">Количество дней</div>
            </div>
            <div className="row section-2__str-2">
                <div className="col-30 first"><span className="ft-size--25">{ item.toPay }</span> грн</div>
                <div className="col-40 str-2">
                    <div className="el-1">+</div>
                    <div className="el-2"><span className="ft-size--20 value-slider-1">{ item.bodyCredit }</span> грн</div>
                    <div className="el-3">=</div>
                </div>
                <div className="col-30 last str-2">
                    <span className="ft-size--20 value-slider-2">{ item.daysToPay }</span> дней
                </div>
            </div>
            <div className="row section-2__str-3">
                <div className="col-30 first">Сумма</div>
                <div className="col-40 str-3">Срок</div>
                <div className="col-30"></div>
            </div>
            <div className="row section-2__str-4">
                <div className="col-30 first">{ item.limitSumm } грн</div>
                <div className="col-40 str-4"> { item.limitTerm } дней</div>
                <div className="col-30"></div>
            </div>
        </div>
        <div className="bid"><a href="#">Оформить заявку</a></div>
        { item.sale && <div className="section-2__sale">{ item.sale }% кредит</div> }
    </div>)

    };
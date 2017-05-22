import * as React from "react";

import '../css/main.css';

export class Hello extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Тарас'
        }
    }

    render() {
        const { name } = this.state;

        return (
            <div>
                <h1>{ name }</h1>
            </div>
        );
    }
}

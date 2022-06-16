import React from "react";
import {wrapChildrenWith} from '../../util/common';

class StateProvider extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "Tagesplan",
            navbaritems: [{name: "kontakt",title:"Kontakt",href:"kontakt"},{name: "projekt",title:"Projekte",href:"projekte"},{name: "start",title:"Start",href:"start"}],
            currentsite: "start"
        }
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            // actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery'])
        });

        return <div>{children}</div>;
    }

}

export default StateProvider
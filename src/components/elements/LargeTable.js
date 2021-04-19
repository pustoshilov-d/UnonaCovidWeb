import React from 'react';
import { Table} from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;


class LargeTable extends React.Component {

    constructor(props){
        super(props);
        this.state = { }
    }

    componentWillMount(){
        this.setState({data: this.props.data,
            header: Object.keys(this.props.data[0]),
            test:'sdad'})
            // .then(() => {console.log(this.state)})
        console.log(this.props.data[0])
        console.log(Object.keys(this.props.data[0]))
        for (let key in this.props.data[0]) {
            console.log(key)

        }
    }


    render() {
        return (

            <Table data={this.state.data} height={500} >

                {this.state.header.map((value) =>
                    <Column sort resizable>
                        <HeaderCell>{value}</HeaderCell>
                        <Cell dataKey={value} />
                    </Column>
                )}

                {/*<Column  width={100} sort fixed resizable>*/}
                {/*    <HeaderCell>ID</HeaderCell>*/}
                {/*    <Cell dataKey="id" />*/}
                {/*</Column>*/}
                {/*<Column  width={100} sort resizable>*/}
                {/*    <HeaderCell>Name</HeaderCell>*/}
                {/*    <Cell dataKey="name" />*/}
                {/*</Column>*/}
                {/*<Column  width={100} sort resizable>*/}
                {/*    <HeaderCell>Email</HeaderCell>*/}
                {/*    <Cell dataKey="email" />*/}
                {/*</Column>*/}
            </Table>

                );
    }
}

export default LargeTable;
// ReactDOM.render(<LargeTable />);
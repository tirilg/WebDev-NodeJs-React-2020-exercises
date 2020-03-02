import React, { Component } from 'react';
import Table from '../../components/table/Table';
import { BarLoader } from 'react-spinners'

class Cities extends Component {

    state = {
        cities: [],
        loading: true
    }

  /*   componentDidMount() {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
            .then(res => res.json())
            .then(cities => this.setState({cities, loading: false}));

    } */

    async componentDidMount() {
        try {
            const res = await fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities');
            const cities = await res.json();
            this.setState({ cities: cities, loading: false });
        } catch(error) {
            console.log(error)
        }
      }

    render() {
        //console.log(this.state.cities)
        //const rows = [{id: 1, city: 'Copenhagen'}, {id: 2, city: 'Oslo'}]

        const { cities, loading } = this.state;
        

        return (
            <div>
                <h1>Cities</h1>
                { loading ?
                    <div>
                        <BarLoader className="loader" loading={loading}/>
                    </div>
                :
                    <Table columns={['City', 'State', 'District']} rows={cities} />
                }
            </div>
        )
    }
}

export default Cities;
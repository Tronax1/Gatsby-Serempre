import React from 'react'
import Layout from '../components/layout'
import GoogleMapReact from 'google-map-react'
import Marker from '../components/Marker'
import {useSelector} from 'react-redux'



const Map = () => {
    const todosCoordinates = useSelector(state => state.todos) 
    const coordinates = {
        center: {
            lat: 4.624335,
            lng: -74.063644
        }
    }
    const renderMarkers = () => (
        todosCoordinates.map((item, i)=>(
            <Marker key={i} lat={item.lat} lng={item.lng}/>
        ))
    )
    return (
        <Layout>
            <div style={{height: '88vh', width: '100%'}}>
                <GoogleMapReact
                    defaultCenter={coordinates.center}
                    defaultZoom={5}
                >
                    {renderMarkers()}
                </GoogleMapReact>
            </div>
        </Layout>
    )
}

export default Map
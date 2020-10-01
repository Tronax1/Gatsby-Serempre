import React from 'react'
import Layout from '../components/layout'
import GoogleMapReact from 'google-map-react'

const coordinates = {
    center:{
        lat: 59.95,
        lng: 30.33
    }
}

const Map = () => {
    return (
        <Layout>
            <div style={{height: '88vh', width: '100%'}}>
                <GoogleMapReact
                    defaultCenter={coordinates.center}
                    defaultZoom={11}
                >
                
                </GoogleMapReact>
            </div>
        </Layout>
    )
}

export default Map
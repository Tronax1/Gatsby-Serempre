import {useEffect, useState} from 'react'

const useGeoLocation = () => {
    const [data, setData] = useState({ description: '', lat: 0, lng: 0 })
    useEffect(()=>{
        const getGeoLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
        const getCoordinates = (position) => {
            setData(prevState => ({
                ...prevState,
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }))
        }
        const handleLocationError = (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.")
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.")
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.")
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.")
                    break;
                default:
                    alert("An unknown error occurred")
            }
        }
        getGeoLocation()
    }, [])
    const setDescription = e => {
        const val = e.target.value
        setData((prevState, props) => ({
            ...prevState,
            description: val
        }))
    }
    const setDefault = () =>{
        setData({
            description: '',
            lat: 0,
            lng: 0
        })
    }
    return {
        data,
        setDescription,
        setDefault
    }
}
export default useGeoLocation
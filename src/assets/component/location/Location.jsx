
import GoogleMapReact from 'google-map-react';

export const Location = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 10.01502627
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={10.99835602}
                    lng={77.01502627}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default Location;

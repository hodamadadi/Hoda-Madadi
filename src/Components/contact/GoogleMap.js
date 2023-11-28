import React from 'react';
import './googleMap.css';
{
}
export const GoogleMap = () => {
  return (
    <div className="map-section">  {/*GOOGLE MAP*/}
      <div className="row">
        <div className="map-frame">
          <iframe
            id="gmap_convas"
            width="100%"
            height="200"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Mahalle,%20Haji,%20Abbas,%20Heart,
            %20Afghanistan+(Location:%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>
      </div>
    </div>
  );};export default GoogleMap;


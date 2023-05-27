import React, { useEffect, useState } from 'react';

const AddressDisplay = (props) => {
  const [ipAddress, setIPAddress] = useState(null);
  
  useEffect(() => {
    fetch(props.api_url)
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.error('Error fetching IP address:', error));
  }, [props.api_url]);

  return (
    <div>
      {ipAddress}
    </div>
  );
};

export default AddressDisplay;

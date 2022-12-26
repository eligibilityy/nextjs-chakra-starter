## Discord Component Breakdown

```javascript
import { useState, useEffect } from 'react'

// This function makes a request to the API and returns the data
// and a loading boolean
function FetchData() {
  // Initialize state variables with useState
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect allows you to perform side effects in a functional component
  useEffect(() => {
    // ID for the API request
    // Replace <ID> with your Discord ID
    const ID = '<ID>'

    // Make a request to the API
    fetch(`https://api.lanyard.rest/v1/users/${ID}`)
      .then(res => res.json())
      .then(res => {
        // Update data and loading state variables with the received data
        setData(res.data)
        setLoading(false)
      })
  }, []) // The empty array at the end tells React to only execute the effect when the component mounts

  // Return the data and loading state variables
  return { data, loading }
}

const DiscSpotify = () => {
  // Destructure the data and loading variables from the FetchData function
  const { data, loading } = FetchData()

  // Return a placeholder/skeleton component if it's loading
  if (loading) {
    return (
      // . . .
    )
  }

  // Return main component when it has fetched the data
  return (
    // . . .
  )
}

// Export the DiscSpotify component as the default export
export default DiscSpotify
```

*Note: `react-use-lanyard` is in `package.json` but honestly I'm too stupid to use that, I was stuck on this component for like 3 whole hours lol but you can use it if you want.
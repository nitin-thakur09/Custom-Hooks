
import { useFetch } from '../src/hooks/useFetch'; // Import the custom hook
import './App.css'
const App = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

  if (loading) {
    return <div className='loading'></div>;
  }

if(error){
  return <h1 style={{height: '80vh', width: '100vw' , fontSize:'9rem' , color:'white' , display:'flex' , justifyContent:'center',alignItems:'center'}} >ERROR! {error}</h1>;
}
  return (
    <div className='bod'>
      <h1>Photos</h1>
      <div style={{ marginLeft:'30px',display: 'flex',  flexWrap:'wrap',columnGap:'10px',rowGap:'10px'}}>
        {data.slice(0, 100).map((photo) => ( // Display only the first 50 items for brevity
          <div key={photo.id} style={{display: 'flex', flexDirection: 'column',  textAlign: 'center', border: '2px solid white', padding: '2px',height: '300px',width: '425px',alignItems:'center',margin: '10px' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '200px', height: '200px', borderRadius: '4px',margin:'25px',paddingTop:'5px' }} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
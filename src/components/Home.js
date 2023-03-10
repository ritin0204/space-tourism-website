import './../styles/home.css';

const Home = () => {
  const exploreTap = () => {
    window.location.href = '/destination';
    document.getElementById("01").click();
  }
  return (
    <div className='main'>
      <div className='description-div'>
        <h5>SO, YOU WANT TO TRAVEL TO</h5>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className='image-div'>
        <h1 className='explore' onClick={exploreTap}>EXPLORE</h1>
      </div>
    </div>
  );
}


export default Home;
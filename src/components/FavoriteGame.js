import { Container } from "react-bootstrap";

function FavoriteGame() {
  return (
    <div className="FavoriteGame">
      <Container style={{ display: 'flex'}}>
        <div style={{ marginRight: '20px' }}>
        <h1 style={{marginBottom: '40px'}}>My Game of the Month</h1>
        <h2>Arkham Horror</h2>
        <h3 style={{marginBottom: '20px'}}>The Card Game</h3>
        <p style={{marginBottom: '20px', marginRight: '50px'}}>
          The boundaries between worlds have drawn perilously thin. Dark forces work in the shadows and call upon unspeakable horrors, strange happenings are discovered all throughout the city of Arkham, Massachusetts, and behind it all an Ancient One manipulates everything from beyond the veil. It is time to revisit that which started it all… In this game, you, on your own or with a friend (or up to three friends in this revised version), become characters within the quiet New England town of Arkham and work to investigate the recent strange happenings and solve the mysteries. You have your talents, sure, but you also have your flaws. Perhaps you've dabbled a little too much in the writings of the Necronomicon, and its words continue to haunt you. Perhaps you feel compelled to cover up any signs of otherworldly evils, hampering your own investigations in order to protect the quiet confidence of the greater population. Perhaps you'll be scarred by your encounters with a ghoulish cult. With a revamped system of organization and a number of quality-of-life improvements, the box comes with everything you need to get your Arkham campaigns started, including enough cards and components for up to three other players to join you in your quest against the Mythos.
        </p>
        </div>
        <img style ={{width: '50%'}}src="https://cf.geekdo-images.com/RdCWCXPnBGSxoOhk5Hkq_g__imagepage/img/IjAnsFhA0onPRgYnLLsRG3PZHcI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6530423.jpg"></img>
      </Container>
    </div>
  );
}
 
export default FavoriteGame;
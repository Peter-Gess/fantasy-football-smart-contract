const Header = {
  padding: 10,
  margin: 10,
  backgroundColor: '#FFFFF',
  color: '#333',
  display: 'inline-block',
  fontFamily: 'Trebuchet MS',
  fontSize: '16px',
  textAlign: 'center'
};

const Title = {
  padding: 10,
  margin: 10,
  backgroundColor: '#FFFFF',
  color: '#333',
  display: 'inline-block',
  fontFamily: 'Oswald, sans-serif',
  textTransform: 'uppercase',
  fontSize: '32px',
  textAlign: 'center',
  position: 'relative'
};

const SubTitle= {
  padding: 10,
  margin: 10,
  backgroundColor: '#FFFFF',
  color: '#333',
  display: 'inline-block',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '16x',
  textAlign: 'center',
  position: 'relative'
};

const BackGround = {
  backgroundColor: '#a7aeba',
  height: '100vh',
  minHeight: '100vh'
};

const Button = {
  mozBoxShadow: 'inset 0px 1px 0px 0px #dcecfb',
	webkitBoxShadow:'inset 0px 1px 0px 0px #dcecfb',
	boxShadow: 'inset 0px 1px 0px 0px #dcecfb',
	background: '-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #bddbfa), color-stop(1, #80b5ea))',
	background: '-moz-linear-gradient(top, #bddbfa 5%, #80b5ea 100%)',
  background: '-webkit-linear-gradient(top, #bddbfa 5%, #80b5ea 100%)',
	background: '-o-linear-gradient(top, #bddbfa 5%, #80b5ea 100%)',
	background: '-ms-linear-gradient(top, #bddbfa 5%, #80b5ea 100%)',
	background: 'linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%)',
	filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#bddbfa, endColorstr=#80b5ea,GradientType=0)',
	backgroundColor:' #bddbfa -moz-border-radius:6px -webkit-border-radius:6px',
	borderRadius: '6px',
	border: '1px solid #84bbf3',
	display: 'inline-block',
	cursor: 'pointer',
	color: '#ffffff',
	fontFamily: 'Arial',
	fontSize: '15px',
	fontWeight: 'bold',
	padding: '6px 24px',
	textDecoration: 'none',
	textShadow: '0px 1px 0px #528ecc'
};

 const Input = {
  padding: '2px',
  margin: '5px 30px 5px 5px',
  fontSize: '16px',
  textAlign: 'left',
  borderWidth: '9px',
  borderRadius: '0px',
  borderStyle: 'Ridge',
 };     

 const styles = {
   Header: Header,
   Title: Title,
   Input: Input,
   BackGround: BackGround,
   Button: Button,
   SubTitle: SubTitle
 };

 export default styles;
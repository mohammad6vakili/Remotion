// remotion imports
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Audio,
} from 'remotion';
// assets imports
import BeachOne from './tmp/Beach-1.jpeg';
import BeachTwo from './tmp/Beach-2.jpeg';
import BeachThree from './tmp/Beach-3.jpeg';
import BeachFour from './tmp/Beach-4.jpeg';
import JumpAudio from './tmp/Jump.wav';
// Components imports
import FirstVideo from './Ocean/FirstVideo';
import {FirstContent} from './Ocean/FirstContent';
import SecondVideo from './Ocean/SecondVideo';
import {SecondContent} from './Ocean/SecondContent';
import ThirdVideo from './Ocean/ThirdVideo';
// config imports
import {Config} from './Config/config';

const OceanVideo: React.FC = () => {
	// hooks
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();
	// animations
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	// styles
	const BeachImagesStyle: React.CSSProperties = {
		width: '100%',
		height: '100%',
		borderRadius: '50%',
		objectFit: 'cover',
		boxShadow: '1px 1px 20px 10px #423510',
	};

	const BeachOneStyle: React.CSSProperties = {
		width: '400px',
		height: '400px',
		borderRadius: '50%',
		right: '50px',
		bottom: '25px',
		position: 'absolute',
	};

	const BeachTwoStyle: React.CSSProperties = {
		width: '400px',
		height: '400px',
		borderRadius: '50%',
		left: '50px',
		bottom: '25px',
		position: 'absolute',
	};

	const BeachThreeStyle: React.CSSProperties = {
		width: '400px',
		height: '400px',
		borderRadius: '50%',
		left: '50px',
		top: '25px',
		position: 'absolute',
	};

	const BeachFourStyle: React.CSSProperties = {
		width: '400px',
		height: '400px',
		borderRadius: '50%',
		right: '50px',
		top: '25px',
		position: 'absolute',
	};

	const InfoStyle: React.CSSProperties = {
		width: '100%',
		height: '100%',
		background: 'white',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '40px',
		color: 'gray',
		fontFamily: Config.secondary_font[0],
	};

	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			{/* ----------------Video Audio----------------– */}
			<Audio src={JumpAudio} />
			<AbsoluteFill style={{opacity}}>
				{/* ----------------Fisrt Part----------------– */}
				<Sequence from={0}>
					<FirstVideo />
				</Sequence>
				<Sequence from={15}>
					<FirstContent />
				</Sequence>
				{/* ----------------Second Part----------------– */}
				<Sequence from={100}>
					<SecondVideo />
				</Sequence>
				<Sequence from={135}>
					<SecondContent />
				</Sequence>
				{/* ----------------Third Part----------------– */}
				<Sequence from={245}>
					<ThirdVideo />
				</Sequence>
				<Sequence from={320}>
					<div style={BeachThreeStyle}>
						<img style={BeachImagesStyle} src={BeachThree} alt="Beach image" />
					</div>
				</Sequence>
				<Sequence from={330}>
					<div style={BeachOneStyle}>
						<img style={BeachImagesStyle} src={BeachOne} alt="Beach image" />
					</div>
				</Sequence>
				<Sequence from={340}>
					<div style={BeachTwoStyle}>
						<img style={BeachImagesStyle} src={BeachTwo} alt="Beach image" />
					</div>
				</Sequence>
				<Sequence from={350}>
					<div style={BeachFourStyle}>
						<img style={BeachImagesStyle} src={BeachFour} alt="Beach image" />
					</div>
				</Sequence>
				{/* ----------------Last Part----------------– */}
				<Sequence from={450}>
					<div style={InfoStyle}>
						<a
							style={{
								textDecoration: 'none',
								fontSize: '64px',
								fontWeight: '700',
								marginBottom: '50px',
								color: 'black',
							}}
							target="_blank"
							href="https://github.com/mohammad6vakili/Remotion"
						>
							https://github.com/mohammad6vakili/Remotion
						</a>
						<div>
							<span>Created by</span>
							<a
								target="_blank"
								style={{
									textDecoration: 'none',
									fontSize: '50px',
									color: 'black',
									fontWeight: '700',
									marginLeft: '15px',
								}}
								href="https://github.com/mohammad6vakili"
							>
								Mohammad Ali Vakilidoost
							</a>
						</div>
					</div>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
export default OceanVideo;

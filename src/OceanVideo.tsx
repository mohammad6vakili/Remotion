import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {FirstTextWrapper} from './Ocean/FirstTextWrapper';
import FirstVideo from './Ocean/FirstVideo';
import JumpAudio from './tmp/Jump.wav';
import { Audio } from "remotion";

const OceanVideo: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<Audio
				src={JumpAudio}
			/>
			<AbsoluteFill style={{opacity}}>
				{/* First Video */}
				<Sequence from={0}>
					<FirstVideo />
				</Sequence>
				{/* First text wrapper */}
				<Sequence from={15}>
					<FirstTextWrapper  />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
export default OceanVideo;

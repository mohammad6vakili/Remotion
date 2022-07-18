import React from 'react';
// remotion imports
import {
	spring,
	useCurrentFrame,
	useVideoConfig,
	interpolate,
	Video,
} from 'remotion';
// config import
import {Config} from '../Config/config';
// assets imports
import videoUrl from '../tmp/1.mp4';

const ThirdVideo = () => {
	// hooks
	const {durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// animations
	const bottom = spring({
		frame,
		fps,
		from: -1000,
		to: 0,
		config: {
			stiffness: 100,
		},
	});

	const opacity = interpolate(
		frame,
		[0, 30, durationInFrames - 30, durationInFrames],
		// v--v---v----------------------v
		[0, 1, 1, 0]
	);

	// styles
	const VideoWrapper: React.CSSProperties = {
		width: '100%',
		height: '100%',
		display: 'flex',
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid red',
		position: 'absolute',
		opacity,
		bottom,
	};

	const VideoTextLabel: React.CSSProperties = {
		position: 'absolute',
		fontSize: '80px',
		top: 'auto',
		bottom: 'auto',
		color: 'white',
		fontWeight: '700',
		opacity,
	};

	return (
		<div style={VideoWrapper}>
			<Video src={videoUrl} volume={0} />
			<div style={VideoTextLabel}>{Config.text.end_text[0]}</div>
		</div>
	);
};
export default ThirdVideo;

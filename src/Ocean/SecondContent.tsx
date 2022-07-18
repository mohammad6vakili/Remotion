import React from 'react';
// remotion imports
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
// config import
import {Config} from '../Config/config';
// assets imports
import Board from '../tmp/Board.png';

export const SecondContent: React.FC = () => {
	// hooks
	const {durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// animations
	const top = spring({frame, fps, from: -1000, to: 0});
	// styles
	const SecondContent: React.CSSProperties = {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'flex-start',
	};

	const mainText: React.CSSProperties = {
		width: '32%',
		height: '500px',
		borderRadius: '80px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		top,
	};

	const mainTextImage: React.CSSProperties = {
		width: '100%',
		height: '100%',
	};

	const mainTextTitle: React.CSSProperties = {
		fontFamily: Config.secondary_font[0],
		fontSize: '42px',
		fontWeight: '900',
		color: 'white',
		position: 'absolute',
		top: '160px',
	};

	const mainTextDesc: React.CSSProperties = {
		position: 'absolute',
		top: '360px',
		width: '540px',
		textAlign: 'center',
		fontSize: '38px',
		color: 'rgba(255, 255, 255, .8)',
	};

	return (
		<div style={SecondContent}>
			{Config.text.middle_text.map((txt, index) => (
				<div key={index} style={mainText}>
					<img style={mainTextImage} src={Board} alt="wooden board" />
					<span style={mainTextTitle}>{Object.values(txt)[0]}</span>
					<span style={mainTextDesc}>{Object.values(txt)[1]}</span>
				</div>
			))}
		</div>
	);
};

import React from 'react';
// remotion imports
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
// config import
import {Config} from '../Config/config';
// assets import
import ZebraLogo from "../tmp/logo_zebra-removebg-preview.png"

export const FirstContent: React.FC = () => {
	// hooks
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const words = Config.text.start_text[0].split(' ');
	// animations
	const top = spring({frame, fps, from: -1000, to: 0});

	// styles
	const FirstContent: React.CSSProperties = {
		fontWeight: 'bold',
		position: 'absolute',
		width: '100%',
		height: '1000px',
		left: '0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		background:
			'linear-gradient(180deg, rgba(66, 53, 16,0.88222426470588236) 0%, rgba(66, 53, 16,0) 100%)',
		top,
	};

	const title: React.CSSProperties = {
		fontFamily: Config.main_font[0],
		fontWeight: 'bold',
		fontSize: 100,
		textAlign: 'center',
		position: 'absolute',
		color: 'white',
		top: '0px',
		width: '100%',
	};

	const word: React.CSSProperties = {
		marginLeft: 10,
		marginRight: 10,
		color: 'white',
		display: 'inline-block',
	};

	return (
		<div style={FirstContent}>
			<h1 style={title}>
				{words.map((t, i) => {
					const delay = i * 5;

					const scale = spring({
						fps: videoConfig.fps,
						frame: frame - delay,
						config: {
							damping: 200,
						},
					});

					return (
						<span
							key={t}
							style={{
								...word,
								transform: `scale(${scale})`,
							}}
						>
							{t}
						</span>
					);
				})}
			</h1>
			<img style={{marginTop:"150px"}} src={ZebraLogo} alt="zebra" />
		</div>
	);
};

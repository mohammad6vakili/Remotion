import React from 'react';
import {spring, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import {Config} from '../Config/config';

export const FirstTextWrapper: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const words = Config.text.start_text[0].split(' ');

	const bottom = spring({frame, fps, from: -1000, to: 0});

	const firstTextWrapper: React.CSSProperties = {
		fontWeight: 'bold',
		position: 'absolute',
		width: '90%',
		height: '400px',
		left: '5%',
		border: '4px solid yellow',
		borderBottom: 'none',
		borderTopRightRadius: '15px',
		borderTopLeftRadius: '15px',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(241,255,0,0.18222426470588236) 100%)',
		bottom,
	};

	const title: React.CSSProperties = {
		fontFamily: Config.main_font[0],
		fontWeight: 'bold',
		fontSize: 100,
		textAlign: 'center',
		position: 'absolute',
		color: 'white',
		bottom: 150,
		width: '100%',
	};

	const word: React.CSSProperties = {
		marginLeft: 10,
		marginRight: 10,
		color: 'white',
		display: 'inline-block',
	};

	return (
		<div style={firstTextWrapper}>
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
		</div>
	);
};

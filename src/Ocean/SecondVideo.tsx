// style component imports
import styled from 'styled-components';
// remotion imports
import {Video, spring, useCurrentFrame, useVideoConfig} from 'remotion';
// assets imports
import videoUrl from '../tmp/2.mp4';

// styled components
const VideoWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: black;
	justify-content: center;
`;

const SecondVideo = () => {
	// hooks
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// animations
	const right = spring({
		frame,
		fps,
		from: -1000,
		to: 0,
		config: {
			stiffness: 100,
		},
	});

	return (
		<VideoWrapper style={{position: 'absolute', right}}>
			<Video src={videoUrl} volume={0} />
		</VideoWrapper>
	);
};
export default SecondVideo;

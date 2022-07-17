import React from 'react';
import styled from 'styled-components';
import {Config} from '../Config/config';
import {Video} from 'remotion';
import videoUrl from "../tmp/5.mp4"

const VideoWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	background-color: black;
	justify-content: center;
`;

const FirstVideo = () => {
	return (
		<VideoWrapper>
			<Video src={videoUrl} volume={0} />
		</VideoWrapper>
	);
};
export default FirstVideo;

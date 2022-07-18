import {Composition} from 'remotion';
import OceanVideo from './OceanVideo';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Ocean"
				component={OceanVideo}
				durationInFrames={600}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};

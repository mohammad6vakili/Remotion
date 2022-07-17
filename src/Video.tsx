import {Composition} from 'remotion';
import OceanVideo from './OceanVideo';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
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

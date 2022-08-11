import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Stage, Center, OrbitControls} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import styles from "../styles/index.module.css";
import Floor from "../components/floor/floor";
import Loader from "../components/ui/loadingpage/Loader";

export const parameters = {
	layout: 'fullscreen',
	actions: {argTypesRegex: '^on[A-Z].*'},
}

export const decorators = [
	(StoryFn, options) => (
		<Suspense fallback={null}>
			{options.args.noStage ? (
				<StoryFn/>
			) : (
				<div className={styles.appContainer}>
					<Canvas dpr={[1, 1.5]} shadows>
						<Suspense fallback={<Loader/>}>
							<fog attach="fog" args={["#325a80", 10, 200]}/>
							<color attach="background" args={["#325a80"]}/>
							<Physics>
								<Floor rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} userData={{id: "floor"}}/>
								<Stage>
									<Center>
										<StoryFn/>
									</Center>
									{options.args.noControls ? null : <OrbitControls/>}
								</Stage>
							</Physics>
						</Suspense>
					</Canvas>
				</div>
			)}
		</Suspense>
	),
]
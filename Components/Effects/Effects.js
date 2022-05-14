import {EffectComposer, DepthOfField} from "@react-three/postprocessing";

export const Effects = () => {
    return (
        <EffectComposer>
            <DepthOfField
                focusDistance={0} // where to focus
                focalLength={0.04} // focal length
                bokehScale={2} // bokeh size
            />
        </EffectComposer>
    );
}
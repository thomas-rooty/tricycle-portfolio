import {EffectComposer, Vignette} from "@react-three/postprocessing";
import { DepthOfField } from '@react-three/postprocessing';
import {BlendFunction} from "postprocessing";

export const Effects = () => {
    return (
        <EffectComposer>
            <Vignette
                darkness={0.4}
                offset={0.01}
                blendFunction={BlendFunction.NORMAL}
            />
            <DepthOfField
                focusDistance={0} // where to focus
                focalLength={0.04} // focal length
                bokehScale={2} // bokeh size
            />
        </EffectComposer>
    );
}
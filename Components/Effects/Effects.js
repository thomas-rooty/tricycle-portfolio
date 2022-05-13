import {EffectComposer, Vignette} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

export const Effects = () => {
    return (
        <EffectComposer>
            <Vignette
                darkness={0.4}
                offset={0.01}
                blendFunction={BlendFunction.NORMAL}
            />
        </EffectComposer>
    );
}
import {EffectComposer, Vignette } from "@react-three/postprocessing";

const Effects = () => {
    return (
        <EffectComposer>
            <Vignette
                darkness={0.3}
                offset={0.01}
                blurRadius={0.5}
            />
        </EffectComposer>
    );
}

export default Effects;
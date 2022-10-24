import {
  EffectComposer,
  SSAO,
  DepthOfField,
} from "@react-three/postprocessing";

export const Effects = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.075}
        bokehScale={2}
        height={480}
      />
      <SSAO />
    <EffectComposer/>
  );
};

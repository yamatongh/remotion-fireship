import {
  AbsoluteFill,
  Audio,
  Sequence,
  Series,
  staticFile,
  Video,
} from "remotion";

import { WeatherMap } from "./components/WeatherMap/WeatherMap";
import { Flipbook } from "./Flipbook";
import { HdTo4k } from "./helpers/hd-to-4k";
import { UsingJavaScript } from "./UsingJavaScript";
import { Reactive } from "./Reactive";
import { StorifyData } from "./StorifyData";
import { WeatherAPI } from "./WeatherAPI";
import { Component } from "./WeatherAPI/Component";
import { DataDriven } from "./DataDriven";
import { VideoInReact } from "./VideoInReact";
import { IntroducingRemotion } from "./IntroducingRemotion";
import { LikeAndSubscribe } from "./LikeAndSubscribe";
import { CheckOnGithub } from "./CheckOnGithub/Github";
import { MadeDifferent } from "./components/MadeDifferent";
import { RemotionWebsite } from "./components/RemotionWebsite";
import { DevTools } from "./components/DevTools";

const audio = staticFile("/audio.wav");
const flipbook = staticFile("/videos/flipbook.mov");
const usingRemotion = staticFile("/videos/using-remotion.mp4");

export const Remotion = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={70}>
          <MadeDifferent />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <UsingJavaScript />
        </Series.Sequence>
        <Series.Sequence durationInFrames={68}>
          <DevTools />
        </Series.Sequence>
        <Series.Sequence durationInFrames={92}>
          <RemotionWebsite />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Video src={usingRemotion} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <Video src={flipbook} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={180}>
          <Flipbook />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <Reactive />
        </Series.Sequence>
        <Series.Sequence durationInFrames={90}>
          <VideoInReact />
        </Series.Sequence>
        <Series.Sequence durationInFrames={42}>
          <IntroducingRemotion />
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <HdTo4k>
            <StorifyData />
          </HdTo4k>
        </Series.Sequence>
      </Series>
      <Sequence from={1070} durationInFrames={90}>
        <WeatherAPI />
      </Sequence>
      <Sequence from={1160} durationInFrames={90}>
        <Component />
      </Sequence>
      <Sequence from={1250} durationInFrames={200}>
        <WeatherMap />
      </Sequence>
      <Sequence from={1450} durationInFrames={200}>
        <DataDriven />
      </Sequence>
      <Sequence from={1650} durationInFrames={50}>
        <LikeAndSubscribe />
      </Sequence>
      <Sequence from={1700} durationInFrames={50}>
        <CheckOnGithub />
      </Sequence>
      <Audio src={audio} />
    </>
  );
};

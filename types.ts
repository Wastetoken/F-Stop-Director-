export interface CameraSettings {
  aperture: string;
  shutter: string;
  iso: string;
  film: string;
  lensChar: string;
  wb: string;
  grain: string;
  lighting: string;
  timeOfDay: string;
  lightingSetups: string[];
  subject: string;
  environment: string;
  mood: string;
  composition: string;
  colorGrade: string;
  model: string;
  camera: string;
  genre: string;
  lens: string;
  productSubgenre: string;
  aspectRatio: string;
  activePreset: string;
}

export interface Preset {
  id: string;
  title: string;
  category: string;
  desc: string;
  image?: string;
  data: Partial<CameraSettings>;
}

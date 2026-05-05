import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Save, Lock, Unlock, Search, Camera as CameraIcon } from 'lucide-react';
import { 
  APERTURES, SHUTTERS, ISOS, FILMS, LENS_CHARS, WBS, GRAINS, 
  LIGHTINGS, TODS, COMPOSITIONS, COLOR_GRADES, AI_MODELS, 
  CAMERAS, GENRES, LENSES_BY_GENRE, PRODUCT_SUBGENRES, 
  ASPECT_RATIOS, LIGHTING_SETUPS, PRESETS 
} from './constants';
import { CameraSettings, Preset } from './types';
import Panel from './components/Panel';
import Intro from './components/Intro';

const INITIAL_STATE: CameraSettings = {
  aperture: "f/2.8",
  shutter: "1/125s",
  iso: "400",
  film: "Kodak Portra 400",
  lensChar: "Clinical Sharp",
  wb: "Daylight Balanced",
  grain: "Subtle Grain",
  lighting: "Natural Light",
  timeOfDay: "Golden Hour",
  lightingSetups: [],
  subject: "Portrait of a soldier",
  environment: "Desert landscape",
  mood: "Dramatic",
  composition: "Rule of Thirds",
  colorGrade: "Cinematic",
  model: "Midjourney v6.1",
  camera: "Sony Alpha 1",
  genre: "portrait",
  lens: "85mm prime",
  productSubgenre: "None",
  aspectRatio: "16:9",
  activePreset: "none"
};

export default function App() {
  const [introVisible, setIntroVisible] = useState(true);
  const [state, setState] = useState<CameraSettings>(INITIAL_STATE);
  const [locks, setLocks] = useState({ ap: false, sh: false, iso: false });
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(PRESETS.map(p => p.category))], []);

  const filteredPresets = useMemo(() => {
    return PRESETS.filter(p => 
      (activeCategory === "All" || p.category === activeCategory) &&
      (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       p.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, activeCategory]);

  const prompt = useMemo(() => {
    const s = state;
    const setups = s.lightingSetups.length ? ', ' + s.lightingSetups.join(', ') : '';
    return [
      s.subject,
      'in ' + s.environment,
      s.mood + ' mood',
      s.camera !== 'None' ? 'shot on ' + s.camera : '',
      s.lens !== 'None' ? s.lens + ' lens' : '',
      s.aperture !== 'None' ? s.aperture + ' aperture' : '',
      s.shutter !== 'None' ? s.shutter + ' shutter' : '',
      'ISO ' + s.iso,
      s.film !== 'None' ? s.film + ' film' : '',
      s.lensChar !== 'None' ? s.lensChar : '',
      s.wb !== 'None' ? s.wb : '',
      s.grain !== 'None' ? s.grain : '',
      s.lighting !== 'None' ? s.lighting : '',
      s.timeOfDay !== 'None' ? 'during ' + s.timeOfDay : '',
      setups,
      s.composition !== 'None' ? s.composition + ' composition' : '',
      s.colorGrade !== 'None' ? s.colorGrade + ' grade' : '',
      s.aspectRatio + ' aspect ratio',
      'photorealistic'
    ].filter(Boolean).join(', ');
  }, [state]);

  const updateSetting = useCallback((key: keyof CameraSettings, val: any) => {
    setState(prev => ({ ...prev, [key]: val }));
  }, []);

  const toggleLock = (key: 'ap' | 'sh' | 'iso') => {
    setLocks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const applyPreset = (preset: Preset) => {
    setState(prev => ({ ...prev, ...preset.data, activePreset: preset.id }));
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
  };

  const downloadPrompt = () => {
    const a = document.createElement('a');
    a.href = 'data:text/plain,' + encodeURIComponent(prompt);
    a.download = 'fstop-prompt.txt';
    a.click();
  };

  const toggleLightingSetup = (phrase: string) => {
    setState(prev => {
      const setups = [...prev.lightingSetups];
      const idx = setups.indexOf(phrase);
      if (idx >= 0) setups.splice(idx, 1);
      else setups.push(phrase);
      return { ...prev, lightingSetups: setups };
    });
  };

  if (introVisible) {
    return <Intro onComplete={() => setIntroVisible(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#07080a] p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-6">
        
        {/* Main Interface */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          
          <header className="header p-6 relative overflow-hidden">
            <div className="screw top-2 left-2" />
            <div className="screw top-2 right-2" />
            <div className="screw bottom-2 left-2" />
            <div className="screw bottom-2 right-2" />
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold tracking-[0.2em] text-amber3 mb-1"
            >
              F-STOP DIRECTOR
            </motion.h1>
            <p className="text-[10px] text-text-dim uppercase tracking-widest">Mobile Optical Management System</p>
              <div className="flex justify-center gap-1.5 mt-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="vent-slot w-10 h-1 bg-[#0a0a0c] border-t border-[#1a1c20]" />
                ))}
              </div>
            </header>

          <Panel title="EXPOSURE CONTROL" serial="EXP-001">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label>APERTURE</label>
                  <button onClick={() => toggleLock('ap')} className="text-[#3a3e45] hover:text-amber">
                    {locks.ap ? <Lock size={12} /> : <Unlock size={12} />}
                  </button>
                </div>
                <div className="lcd">
                  <div className="lcd-val">{state.aperture}</div>
                </div>
                <select 
                  value={state.aperture} 
                  onChange={(e) => updateSetting('aperture', e.target.value)}
                  disabled={locks.ap}
                >
                  {APERTURES.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label>SHUTTER</label>
                  <button onClick={() => toggleLock('sh')} className="text-[#3a3e45] hover:text-amber">
                    {locks.sh ? <Lock size={12} /> : <Unlock size={12} />}
                  </button>
                </div>
                <div className="lcd">
                  <div className="lcd-val">{state.shutter}</div>
                </div>
                <select 
                  value={state.shutter} 
                  onChange={(e) => updateSetting('shutter', e.target.value)}
                  disabled={locks.sh}
                >
                  {SHUTTERS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label>ISO</label>
                  <button onClick={() => toggleLock('iso')} className="text-[#3a3e45] hover:text-amber">
                    {locks.iso ? <Lock size={12} /> : <Unlock size={12} />}
                  </button>
                </div>
                <div className="lcd">
                  <div className="lcd-val">{state.iso}</div>
                </div>
                <select 
                  value={state.iso} 
                  onChange={(e) => updateSetting('iso', e.target.value)}
                  disabled={locks.iso}
                >
                  {ISOS.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
            </div>
          </Panel>

          <Panel title="FILM & OPTICAL" serial="OPT-002">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label>FILM STOCK</label>
                <select value={state.film} onChange={(e) => updateSetting('film', e.target.value)}>
                  {FILMS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div><label>LENS CHARACTER</label>
                <select value={state.lensChar} onChange={(e) => updateSetting('lensChar', e.target.value)}>
                  {LENS_CHARS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div><label>WHITE BALANCE</label>
                <select value={state.wb} onChange={(e) => updateSetting('wb', e.target.value)}>
                  {WBS.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div><label>GRAIN</label>
                <select value={state.grain} onChange={(e) => updateSetting('grain', e.target.value)}>
                  {GRAINS.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </div>
          </Panel>

          <Panel title="LIGHTING" serial="LGT-003">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div><label>BASE LIGHTING</label>
                <select value={state.lighting} onChange={(e) => updateSetting('lighting', e.target.value)}>
                  {LIGHTINGS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div><label>TIME OF DAY</label>
                <select value={state.timeOfDay} onChange={(e) => updateSetting('timeOfDay', e.target.value)}>
                  {TODS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <label>LIGHTING SETUP LIBRARY</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {LIGHTING_SETUPS.map(setup => (
                <button 
                  key={setup.phrase}
                  onClick={() => toggleLightingSetup(setup.phrase)}
                  className={`chip ${state.lightingSetups.includes(setup.phrase) ? 'active' : ''}`}
                >
                  {setup.label}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <label>ACTIVE SETUPS</label>
              <div className="text-[10px] text-text-dim min-h-[24px] py-1 border-t border-[#1a1c20] font-mono leading-relaxed">
                {state.lightingSetups.length ? state.lightingSetups.join(' · ') : '—'}
              </div>
            </div>
          </Panel>

          <Panel title="SCENE PARAMETERS" serial="SCN-004">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div><label>SUBJECT</label>
                <textarea rows={2} value={state.subject} onChange={(e) => updateSetting('subject', e.target.value)} />
              </div>
              <div><label>ENVIRONMENT</label>
                <textarea rows={2} value={state.environment} onChange={(e) => updateSetting('environment', e.target.value)} />
              </div>
              <div><label>MOOD / VIBE</label>
                <textarea rows={2} value={state.mood} onChange={(e) => updateSetting('mood', e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label>COMPOSITION</label>
                <select value={state.composition} onChange={(e) => updateSetting('composition', e.target.value)}>
                  {COMPOSITIONS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div><label>COLOR GRADE</label>
                <select value={state.colorGrade} onChange={(e) => updateSetting('colorGrade', e.target.value)}>
                  {COLOR_GRADES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </Panel>
        </div>

        {/* Sidebar Interface */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Panel title="TARGET SYSTEM" serial="TGT-005" warning>
            <div className="flex flex-col gap-4">
              <div><label>AI MODEL</label>
                <select value={state.model} onChange={(e) => updateSetting('model', e.target.value)}>
                  {AI_MODELS.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label>CAMERA</label>
                  <select value={state.camera} onChange={(e) => updateSetting('camera', e.target.value)}>
                    {CAMERAS.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div><label>GENRE</label>
                  <select value={state.genre} onChange={(e) => updateSetting('genre', e.target.value)}>
                    {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>
              <div><label>OPTICAL LENS</label>
                <select value={state.lens} onChange={(e) => updateSetting('lens', e.target.value)}>
                  {(LENSES_BY_GENRE[state.genre] || LENSES_BY_GENRE.portrait).map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
              <div><label>PRODUCT SUBGENRE</label>
                <select value={state.productSubgenre} onChange={(e) => updateSetting('productSubgenre', e.target.value)}>
                  {PRODUCT_SUBGENRES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div><label>ASPECT RATIO</label>
                <div className="grid grid-cols-4 gap-1">
                  {ASPECT_RATIOS.map(r => (
                    <button 
                      key={r}
                      onClick={() => updateSetting('aspectRatio', r)}
                      className={`text-[9px] py-1 border border-[#2a2c30] rounded-sm transition-colors ${state.aspectRatio === r ? 'bg-amber-dim text-amber3 border-amber' : 'bg-[#1e2126] text-text-dim'}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Panel>

          <Panel title="PRESET BROWSER" serial="PRS-006">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-mute" size={12} />
              <input 
                className="pl-8 text-xs"
                placeholder="Search calibrations..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[8px] uppercase tracking-wider px-2 py-1 border border-[#2a2c30] rounded-sm transition-colors ${activeCategory === cat ? 'bg-amber-dim text-amber3' : 'text-text-mute hover:text-text'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="max-h-[300px] overflow-y-auto space-y-2 pr-1 custom-scroll">
              {filteredPresets.map(p => (
                <div 
                  key={p.id}
                  onClick={() => applyPreset(p)}
                  className={`preset-item ${state.activePreset === p.id ? 'active' : ''}`}
                >
                  <div className="preset-thumb flex-shrink-0">
                    {p.image ? (
                      <img 
                        src={p.image} 
                        alt={p.title} 
                        className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <CameraIcon size={16} className="text-[#333]" />
                    )}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-text-bright uppercase tracking-wider">{p.title}</div>
                    <div className="text-[9px] text-text-mute leading-tight">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="OUTPUT" serial="OUT-007">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-1">
                <span className="status-dot" />
                <span className="serial-plate text-[8px]">SYS.READY</span>
              </div>
              <div className="flex gap-2">
                <button onClick={copyPrompt} className="action-btn flex items-center gap-2">
                  <Copy size={12} /> COPY
                </button>
                <button onClick={downloadPrompt} className="action-btn flex items-center gap-2">
                  <Save size={12} /> SAVE
                </button>
              </div>
            </div>
            <div className="output-box custom-scroll">
              {prompt}
            </div>
            <div className="mt-3 text-[9px] text-text-mute flex items-center gap-2 overflow-hidden whitespace-nowrap">
              <span className="text-amber">▸</span> {state.model} | {state.aperture} {state.shutter} ISO {state.iso}
            </div>
          </Panel>
        </div>

      </div>
      
      <div className="fixed bottom-4 right-4 text-[8px] font-mono text-text-mute opacity-50 uppercase tracking-[0.3em] pointer-events-none">
      </div>
    </div>
  );
}
